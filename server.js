const mongoose = require("mongoose");
const express = require('express');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy; // Importa la estrategia local
const User = require('./models/myModel'); // Importa el modelo de usuario
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Carga de variables de entorno
require('dotenv').config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// Conexión a la base de datos
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Proyecto' // Nombre de la base de datos
})
.then((con) => {
    console.log(con.connections);
    console.log("Connected to database");
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});

// Inicialización de la aplicación Express
const app = express();

// Configuración de la sesión
app.use(session({
    secret: 'secreto', // Cambia esto a una cadena secreta única
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Configuración de la estrategia de autenticación local
passport.use(new LocalStrategy(User.authenticate()));

// Serializar al usuario para almacenarlo en la sesión
passport.serializeUser(function(user, done) {
  done(null, user.id); // Solo almacenamos el ID del usuario en la sesión
});

// Deserializar al usuario para recuperarlo de la sesión
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user); // Pasamos el usuario recuperado (o null) al callback
  });
});

// Configuración de la estrategia de autenticación con Google
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/user" // Asegúrate de que la URL de devolución sea correcta
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, {username: profile.displayName},function (err, user) {
      return cb(err, user);
    });
  }
));

// Middleware para manejar la autenticación
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.set('view engine', 'ejs');``
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/Games-Scripts')));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para iniciar sesión con Google
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

// Ruta de devolución de llamada de Google
app.get('/auth/google/user', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Autenticación exitosa, redirigir a la página de usuario
        res.redirect('/user');
    });

// Rutas de la aplicación
app.use('/', require('./routes/myRouter'));

// Middleware para manejar la página 404
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Puerto
const port = 3000;
// Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
