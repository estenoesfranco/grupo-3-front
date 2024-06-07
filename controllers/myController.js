const bcrypt = require('bcrypt');
const User = require('../models/myModel');

// Respuesta a una solicitud de tipo GET para la página de inicio
exports.inicio = (req, res) => {
    res.status(200).render('index'); 
};

// Renderizar la página de inicio de sesión
exports.login = (req, res) => {
    res.status(200).render('login', { error: null }); // Aquí pasas la variable error con un valor nulo
};

// Renderizar la página de usuario logeado
exports.loggedUser = (req, res) => {
    res.status(200).render('loggedUser', { username: req.session.user ? req.session.user.username : null }); // Cambiado de 'usuario' a 'username'
};

// Renderizar la página de registro
exports.registerPage = (req, res) => {
    res.status(200).render('register', { errors: {} });
};

// Renderizar la página del nivel 1 del juego de cartas
exports.level1 = (req, res) => {
    res.status(200).render('Nivel1');
};
// Renderizar la página del nivel 2 del juego de cartas
exports.level2 = (req, res) => {
    res.status(200).render('Nivel2');
};
// Renderizar la página del nivel 3 del juego de cartas
exports.level3 = (req, res) => {
    res.status(200).render('Nivel3');
};

// Renderizar la página del juego 2
exports.juego2 = (req, res) => {
    res.status(200).render('Juego2Nivel2');
};

// Manejar el registro de usuarios
exports.register = async (req, res) => {
    try {
        console.log(req.body); // Imprimir los datos del formulario en la consola del servidor

        const { username, contraseña, edad } = req.body; // Cambiado de 'usuario' a 'username'
        
        // Verificar que los datos del formulario no sean undefined
        if (!username || !contraseña || !edad) {
            return res.status(400).send("Usuario, contraseña y edad son requeridos");
        }

        // Verificar que la edad esté en el rango permitido (0-99)
        if (isNaN(edad) || edad < 0 || edad > 99) {
            return res.status(400).send("La edad debe estar entre 0 y 99 años");
        }

        // Verificar que la contraseña tenga al menos 8 caracteres y contenga al menos una mayúscula
        if (contraseña.length < 8 || !/[A-Z]/.test(contraseña)) {
            return res.status(400).render('register', { errors: { password: "La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula" } });
        }

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ username }); // Cambiado de 'usuario' a 'username'

        // Si el usuario ya existe, enviar un mensaje de error
        if (existingUser) {
            return res.status(400).send("El nombre de usuario ya está en uso");
        }

        // Generar el hash de la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10); // El segundo argumento es el número de rondas de hash

        // Crear un nuevo documento con la contraseña hasheada
        const nuevoUsuario = await User.create({
            username: username, // Cambiado de 'usuario' a 'username'
            contraseña: hashedPassword,
            edad: edad
        });

        // Redirigir al usuario a la página de inicio de sesión después de registrarse exitosamente
        res.redirect('/login');
    } catch (error) {
        // Manejo de errores
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
};

// Manejar la autenticación de usuarios
exports.authenticate = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Buscar el usuario en la base de datos
        const user = await User.findOne({ username }); // Cambiado de 'usuario' a 'username'

        // Si el usuario no existe, enviar mensaje de error
        if (!user) {
            return res.status(401).render('login', { error: 'Usuario o contraseña incorrectos' });
        }

        // Comparar la contraseña ingresada con la contraseña almacenada (hash)
        const passwordMatch = await bcrypt.compare(password, user.contraseña);

        // Si las contraseñas no coinciden, enviar mensaje de error
        if (!passwordMatch) {
            return res.status(401).render('login', { error: 'Usuario o contraseña incorrectos' });
        }

        // Si las credenciales son válidas, guardar el nombre de usuario en la sesión y redirigir
        req.session.user = user;

        res.redirect('/user');
    } catch (error) {
        console.error("Error al autenticar usuario:", error);
        res.status(500).send("Error al autenticar usuario");
    }
};
