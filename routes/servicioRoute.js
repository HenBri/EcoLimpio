const express = require('express');
const router = express.Router();
const servicioControlador = require('../controllers/servicioControlador');


router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.reporteServicioRealizadosPorEstado);
router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.reportePagosReservas);
router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.reporteIngresosMensuales);
router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.obtenerReporteAsesor);
router.get('/reporte/ServicioRealizadosPorEstado', servicioControlador.obtenerReporteVehiculos);


module.exports = router;
