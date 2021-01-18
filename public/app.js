var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose=require('mongoose');

// var blogsRouter=require('./models/blogs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// mongoose connection
mongoose.connect('mongodb://localhost/blogger',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>console.log('Connection Success'))
  .catch((err)=>console.log(err));
  
var app = express();

app.use(cors());
 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/blogs',blogsRouter);

module.exports = app;
