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

    db.sequelize.sync()
        .then( () => db.question.create(
            {
                title: req.body.title,
                create_user: req.user.id,
            }
        ) )
        .then( questionBase => {
            for(let key in req.body){
                if(key.match(/^titleText[0-9]$/)){
                    db.sequelize.sync()
                        .then(()=>db.textQuestion.create(
                            {
                                question_id: questionBase.id,
                                title: req.body[key],
                            }
                        ))
                        .catch(err=>{
                            return res.redirect('/question/create');
                        })
                }
            }
        } )

    return res.redirect('/');
})

module.exports = router;