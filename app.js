const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

// Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
// Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


