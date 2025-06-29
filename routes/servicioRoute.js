const express = require('express');
const router = express.Router();
const servicioControlador = require('../controllers/servicioControlador');


router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.reporteServicioRealizadosPorEstado);


module.exports = router;
