var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
<<<<<<< HEAD
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.55ize.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
=======
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.31jwc.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

<<<<<<< HEAD
//criação de uma nova rota
=======
// Criação de uma nova rota
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
const teste = require('./routes/teste')
app.use('/teste', teste)

// Rota para curso
const curso = require('./routes/curso')
app.use('/curso', curso)

<<<<<<< HEAD

const professor = require('./routes/professor')
app.use('/professor', professor)

const sala_aula = require('./routes/sala_aula')
app.use('/sala_aula', sala_aula)

=======
// Rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

// Rota para sala-aula
const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

// Rota para turma
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
const turma = require('./routes/turma')
app.use('/turma', turma)

module.exports = app;
