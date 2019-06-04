var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/search');
var addRouter = require('./routes/add');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/add', addRouter);




const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))








