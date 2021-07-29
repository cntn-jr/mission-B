'user strict';

const express = require('express');
const router = express.Router();
const db = require('../models');

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

// router.post('/create', authMiddleware, (req, res, next) => {
//     db.sequelize.sync()
//         .then( () => db.Todo.create({
//         })).then( todo => {
//             res.redirect('/');
//         }).catch(err=>{
//             res.redirect('/question/create');
//         });
// })

module.exports = router;