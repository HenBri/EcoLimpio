const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const servicioRoute = require('./routes/servicioRoute');

const app = express();

// Set view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', servicioRoute);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});