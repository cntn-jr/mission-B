var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const Users = require('./models').Users;

var indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');

var app = express();

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize())
app.use(passport.session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.use('/', indexRouter);
app.use('/signup', signupRouter)

app.get('/login', (req, res, next) => {
  const user = '';
  if(req.user){
    user = req.user;
  }
  res.render('login', { layout: false });
})

app.post('/login',
    passport.authenticate('local' , {
      failureRedirect: '/login',
      session: true,
    }),
    (req, res)=>{
      res.redirect('/');
    }
);

app.get('/logout', (req, res, next)=>{
  req.session.destroy();
  req.logOut();
  res.redirect('login');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: true,
}, (email, password, done) =>  {

Users.findOne({
  where: {
    email: email
  }
})
.then(user => {
  if(user && bcrypt.compareSync(password, user.password)) {
    return done(null, user);  // ログイン成功
  }
  throw new Error();
})
.catch(error => { // エラー処理
  return done(null, false, { message: '認証情報と一致するレコードがありません。' });
});
}));

passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(user, done) {
done(null, user);
});

module.exports = app;
