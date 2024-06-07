// Importar el controlador y Express
const myController = require('../controllers/myController');
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Definir las rutas y acciones de respuesta
router.route('/').get(myController.inicio); // Ruta para la página de inicio
router.route('/Nivel1').get(myController.level1);
router.route('/Nivel2').get(myController.level2);
router.route('/Nivel3').get(myController.level3);
router.route('/Juego2Nivel2').get(myController.juego2);
router.route('/user').get(myController.loggedUser); // Ruta para la página de loggeduser
router.route('/login').get(myController.login).post(myController.authenticate); // Ruta para el inicio de sesión (GET y POST)
router.route('/register').post(myController.register); // Ruta POST para el registro de usuarios
router.route('/registerPage').get(myController.registerPage); // Ruta para la página de registro
router.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));
router.route('/auth/google/user')
    .get(passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/user');
        });
// Exportar el enrutador para su uso en otros archivos
module.exports = router;
