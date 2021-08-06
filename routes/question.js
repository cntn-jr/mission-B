'user strict';

const express = require('express');
const router = express.Router();
const db = require('../models/index');

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

module.exports = router;