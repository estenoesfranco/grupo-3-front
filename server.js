const app = require('./app')
const port = 3000;

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


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
