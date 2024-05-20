const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
// Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Games-Scripts')));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;