const express = require('express');
const router = express.Router();
const servicioControlador = require('../controllers/servicioControlador');

router.get('/reporte/serviciosRealizadosPorEstado', servicioControlador.reporteServicioRealizadosPorEstado);
router.get('/reporte/pagosReservas', servicioControlador.reportePagosReservas);
router.get('/reporte/ingresosMensuales', servicioControlador.reporteIngresosMensuales);
router.get('/reporte/asesor', servicioControlador.reporteAsesor);
router.get('/reporte/vehiculos', servicioControlador.reporteVehiculos);

module.exports = router;