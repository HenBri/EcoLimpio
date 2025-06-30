const servicioModel = require('../models/servicioModels');

exports.reporteServicioRealizadosPorEstado = (req, res) => {
    const { fechaInicio, fechaFinal, sucursalNombre, estadoServicio } = req.query;

    servicioModel.obtenerServicioRealizadosPorEstado(fechaInicio, fechaFinal, sucursalNombre, estadoServicio, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de servicios:', err);
            return res.status(500).send('Error en el servidor');
        }
        console.log('Datos de reporteServiciosRealizadosPorEstado:', datos);
        res.render('servicios/reporteServiciosRealizadosPorEstado', { servicios: datos });
    });
};

exports.reportePagosReservas = (req, res) => {
    const { fechaInicio, fechaFinal, sucursalNombre, clienteNombre } = req.query;

    if (!fechaInicio || !fechaFinal) {
        // Initial load: render empty table
        console.log('Carga inicial de reportePagosReservas: tabla vacía');
        return res.render('servicios/reportePagosReservas', { pagos: [] });
    }

    servicioModel.obtenerReportePagosReservas(fechaInicio, fechaFinal, sucursalNombre, clienteNombre, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de pagos reservas:', err);
            return res.status(500).send('Error en el servidor');
        }
        console.log('Datos de reportePagosReservas:', datos);
        res.render('servicios/reportePagosReservas', { pagos: datos });
    });
};

exports.reporteIngresosMensuales = (req, res) => {
    const { fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro } = req.query;

    if (!fechaInicio || !fechaFinal) {
        // Initial load: render empty table
        console.log('Carga inicial de reporteIngresosMensuales: tabla vacía');
        return res.render('servicios/reporteIngresosMensuales', { ingresos: [] });
    }

    servicioModel.obtenerIngresosMensuales(fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de ingresos mensuales:', err);
            return res.status(500).send('Error en el servidor');
        }
        console.log('Datos de reporteIngresosMensuales:', datos);
        res.render('servicios/reporteIngresosMensuales', { ingresos: datos });
    });
};

exports.reporteAsesor = (req, res) => {
    const { textoFiltro } = req.query;

    if (!textoFiltro) {
        // Initial load: render empty table
        console.log('Carga inicial de reporteAsesor: tabla vacía');
        return res.render('servicios/reporteAsesor', { asesores: [] });
    }

    servicioModel.obtenerReporteAsesor(textoFiltro, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de asesor:', err);
            return res.status(500).send('Error en el servidor');
        }
        console.log('Datos de reporteAsesor:', datos);
        res.render('servicios/reporteAsesor', { asesores: datos });
    });
};

exports.reporteVehiculos = (req, res) => {
    const { textoFiltro } = req.query;

    if (!textoFiltro) {
        // Initial load: render empty table
        console.log('Carga inicial de reporteVehiculos: tabla vacía');
        return res.render('servicios/reporteVehiculos', { vehiculos: [] });
    }

    servicioModel.obtenerReporteVehiculos(textoFiltro, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de vehículos:', err);
            return res.status(500).send('Error en el servidor');
        }
        console.log('Datos de reporteVehiculos:', datos);
        res.render('servicios/reporteVehiculos', { vehiculos: datos });
    });
};