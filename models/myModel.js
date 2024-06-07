const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
    username: String, // Cambiado de 'usuario' a 'username'
    contraseña: String,
    edad: Number,
    googleId: String,
    secreto: String,
});

// Aplicar el plugin passport-local-mongoose al esquema de usuario
userSchema.plugin(passportLocalMongoose, { usernameField: 'username' }); // Cambiado de 'usuario' a 'username'
// Aplica el plugin findOrCreate al esquema de usuario
userSchema.plugin(findOrCreate);

// Exportar el modelo de usuario
module.exports = mongoose.model('User', userSchema, 'user');
