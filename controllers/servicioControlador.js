const servicioModel = require('../models/servicioModels');



exports.reporteServicioRealizadosPorEstado = (req, res) => {
    const { fechaInicio, fechaFinal, sucursalNombre, estadoServicio } = req.query;

    servicioModel.obtenerServicioRealizadosPorEstado(fechaInicio, fechaFinal, sucursalNombre, estadoServicio, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de servicios:', err);
            return res.status(500).send('Error en el servidor');
        }

        console.log(datos);
        // Renderiza la vista que necesites, aquí lo cambié por una vista ejemplo
        res.render('servicios/reporteServiciosRealizadosPorEstado', { servicios: datos });
    });
};


exports.reportePagosReservas = (req, res) => {
    const { fechaInicio, fechaFinal, sucursalNombre, clienteNombre } = req.query;

    servicioModel.obtenerReportePagosReservas(fechaInicio, fechaFinal, sucursalNombre, clienteNombre, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de servicios:', err);
            return res.status(500).send('Error en el servidor');
        }

        console.log(datos);
        // Renderiza la vista que necesites, aquí lo cambié por una vista ejemplo
        res.render('servicios/reportePagosReservas', { servicios: datos });
    });
};

exports.reporteIngresosMensuales= (req, res) => {
    const { fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro  } = req.query;

    servicioModel.obtenerIngresosMensuales(fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro , (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de servicios:', err);
            return res.status(500).send('Error en el servidor');
        }

        console.log(datos);
        // Renderiza la vista que necesites, aquí lo cambié por una vista ejemplo
        res.render('servicios/reporteIngresosMensuales', { servicios: datos });
    });
};

exports.reporteAsesor = (req, res) => {
    const { textoFiltro } = req.query;

    servicioModel.obtenerReporteAsesor(textoFiltro, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de asesor:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.render('servicios/reporteAsesor', { asesores: datos });
        
    });
};

exports.reporteVehiculos = (req, res) => {
    const { textoFiltro } = req.query;

    servicioModel.obtenerReporteVehiculos(textoFiltro, (err, datos) => {
        if (err) {
            console.error('Error al obtener el reporte de vehículos:', err);
            return res.status(500).send('Error en el servidor');
        }

        res.render('servicios/reporteVehiculos', { vehiculos: datos });
    });
};

