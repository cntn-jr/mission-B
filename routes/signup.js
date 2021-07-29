'use strict';

const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const { session } = require('passport');

router.get('/', (req, res, next)=>{
    res.render('signup', { layout: false })
});

router.post('/', (req, res, next)=>{
    if(req.body.pass !== req.body.passConfirm){
        res.redirect('/signup');
    }else{
        const now = new Date();
        db.sequelize.sync()
        .then( () => db.Users.create({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.pass, bcrypt.genSaltSync(8)),
            email: req.body.email,
            createdAt: now,
            updatedAt: now,
        }) )
        .then( user => {
            res.redirect('/login');
        } ).catch(err=>{
            res.redirect('/signup');
        })
    }
})

module.exports = router;