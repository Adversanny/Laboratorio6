const express = require('express');
const app = express();
const port = 3000;
// Middleware para registrar solicitudes en la
consola
app.use((req, res, next) => {
    console.log(`Solicitud recibida en
${req.url}`);
    next();
});
// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API con Express!');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en
http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname +
        '/public/html/index.html');
});

function iframe(parametro) {
    var iframe = document.getElementById('frame'); // Reemplaza 'tu_iframe_id' con el ID de tu iframe
    iframe.src = parametro;
}
