'user strict';

const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { Op } = require("sequelize");

const authMiddleware = (req, res, next) => {
    if(req.isAuthenticated()) { // ログインしてるかチェック
      next();
    } else {
      res.redirect(302, '/login');
    }
};

router.get('/create', authMiddleware, (req, res, next) => {
    const data = {
        user_name: req.user.name,
    }
    res.render('question/create', data);
});

router.post('/create', authMiddleware, (req, res, next) => {

    let radioRegex;
    const radioQuestionPartsAry = [];

    db.sequelize.sync()
        .then( () => db.QuestionForm.create({
                title_form: req.body.title,
                create_user: req.user.id,
            }) )
        .then( questionBase => {
            for(let key in req.body){
                if(key.match(/^titleText[0-9]*$/)){
                    db.sequelize.sync()
                        .then( ()=>{
                            db.QuestionParts.create({
                                    form_id: questionBase.id,
                                    title_parts: req.body[key],
                                    is_radio: false,
                            })
                        } )
                        .catch(err=>{
                            return res.redirect('/question/create');
                        })
                }else if(key.match(/^titleRadio[0-9]*$/)){
                    db.sequelize.sync()
                        .then( ()=>
                            db.QuestionParts.create({
                                form_id: questionBase.id,
                                title_parts: req.body[key],
                                is_radio: true,
                            })
                         )
                        .then( questionParts => {
                            radioRegex = new RegExp('^' + key + '_[0-9]*$');
                            for(let key2 in req.body){
                                if(key2.match(radioRegex)){
                                    db.sequelize.sync()
                                        .then( () => {
                                            db.RadioSelector.create({
                                                question_content: req.body[key2],
                                                question_id: questionParts.id,
                                            })
                                        } )
                                }
                            }
                        } )
                        .catch(err=>{
                            return res.redirect('/question/create');
                        })
                }
            }
        } )

    return res.redirect('/');
})

router.get('/questionsForm/list', authMiddleware,(req, res, next) => {
    db.QuestionForm.findAll({
        where: {
            create_user: { [Op.ne] :req.user.id }
        }
    }).then( questionForm => {
        const data = {
            questionForm: questionForm,
            user_name: req.user.name,
        }
        res.render('question/formList', data);
    })
})

router.get('/questionsForm/:id', authMiddleware, (req, res, next)=>{
    const form_id = req.params.id;
    const question_parts_id_ary = [];
    const data = {
        user_name: req.user.name,
        radio: '',
        question_parts: '',
        title_form: '',
        form_id: form_id,
    }
    db.QuestionForm.findAll({
        where: {
            id: form_id
        }
    }).then( question_form =>{
        for(let key in question_form){
            data['title_form'] = question_form[key].title_form;
        }
        db.QuestionParts.findAll({
            where: {
                form_id: form_id
            }
        }).then(question_parts => {
            for(let key in question_parts){
                if(question_parts[key].is_radio){
                    question_parts_id_ary.push(question_parts[key].id);
                }
            }
            data['question_parts'] = question_parts
        }).then(()=>{
            db.RadioSelector.findAll({
                where: {
                    question_id: question_parts_id_ary
                }
            }).then(radio=>{
                data['radio'] = radio
                res.render('question/formSheet', data)
            })
        })
    })
})

router.post('/questionsForm/:id', (req, res, next)=>{
    for(let key in req.body){
        db.QuestionParts.findByPk(key)
        .then(question_parts=>{
            if(question_parts.is_radio){
                db.sequelize.sync()
                .then(()=>{
                    db.AnswerRadio.create({
                        select_answer: req.body[key],
                        answer_user: req.user.id,
                        question_id: key,
                    })
                })
            }else{
                db.sequelize.sync()
                .then(()=>{
                    db.AnswerText.create({
                        content_answer: req.body[key],
                        answer_user: req.user.id,
                        question_id: key,
                    })
                })
            }
        })
    }
    res.redirect('/');
})

module.exports = router;