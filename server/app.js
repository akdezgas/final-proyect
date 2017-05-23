var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const session         = require("express-session");
const passport        = require("passport");

const authController  = require("./api/user/auth-routes");
require('./config/passport')(passport);
const cors = require('cors');
// Lesson 1: Require mongoose
const mongoose = require('mongoose');
// Lesson 2: Require dotenv configuration
require('dotenv').config();

const urlDB = process.env.MONGO_URL;
console.log(`conncting to db: ${urlDB}`);
mongoose.connect(urlDB).then(() => {
  console.log(`connected!! to db: ${urlDB}`);
});

var app = express();


var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
// view engine setup

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "passport-local-strategy",
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

//HACE FALTA PONER LOS USE DE TODAS LAS RUTAS????!!!!!!

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
