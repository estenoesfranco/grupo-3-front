const app = require('./app')
const port = 4000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index")
});
app.get('/Nivel1', (req, res) => {
    res.render('Nivel1');
});
app.get("/Nivel2", (req, res) => {
    res.render("Nivel2")
});
app.get("/Nivel3", (req, res) => {
    res.render("Nivel3")
});
app.get("/Juego2Nivel2", (req, res) => {
    res.render("Juego2Nivel2")
});
app.get("/login", (req, res) => {
    res.render("log-in")
});

app.get("/registrarse", (req, res) => {
    res.render("registrarse")
});

app.get("/logged-user", (req, res) => {
    res.render("Logged-user")
});
app.use((req, res, next) => {
    res.status("404").render("404")
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});