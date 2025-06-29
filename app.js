const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');


const camionRouter = require('./routes/camionRouter'); // Ajusta la ruta si es distinta


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Montar las rutas
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use('/', camionRouter); // MUY IMPORTANTE


// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
