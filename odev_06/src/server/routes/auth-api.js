const express = require('express');
const passport = require('passport');

const Users = require('../db/users');

const router =express.Router();

router.post('/login',passport.authenticate('local'),(req,res) =>{
    res.status(204).send();
});

router.post('/signup',(req,res) =>{
    const created = Users.createUser(req.body.userId,req.body.password);

    if(!created){
        res.status(400).send();
        return 
    }

    passport.authenticate('local')(req,res,() => {
        req.session.save((err) => {
            if(err){
                res.status(500).send();
            }else{
                res.status(201).send();
            }
        });
    });
});

router.post('/logout',(req,res)=>{
    req.logout();
    req.session.destroy();
    res.status(204).send();

});

router.get('/user',(req,res) =>{
    if(!req.user){
        res.status(401).send();
        return;
    }

    res.status(200).json(
       {
        id:req.userId,
        victories: req.user.victories,
        defeats: req.user.defeats,
       }
    );

})

module.exports = router;