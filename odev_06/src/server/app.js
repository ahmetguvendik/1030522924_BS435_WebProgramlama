const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db/users')
const app = express();
const authApi = require('/routes/auth-api');

app.use(session({
    secret:"şifre",
    resave=false,

}));

passport.use(new LocalStrategy({
    usernameField : 'userId',
    passwordField: "password"
},(userId,password,done)=>{
    const ok = Users.veriyUser(userId,password);

    if(!ok){
        return done(null,false,{message: "Geçersiz"});
    }
    
    else{
        const user = Users.getUser(userId);
        return done(null,user);
    }
}));

passport.serializerUser((user,done)=> {
    done(null,userId);
});

passport.deserializeUser((id,done)=> {
    const user = Users.getUser(id);
    if(user){
        done(null,user);

    }else{
        done(null,false);
    }
});

app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use('/api', authApi);

app.use(express.static('public'));


app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;