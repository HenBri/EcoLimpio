const db = require('../config/db');

exports.obtenerServicioRealizadosPorEstado = (fechaInicio, fechaFinal, sucursalNombre, estadoServicio, callback) => {
    const consulta = 'CALL ReporteServiciosRealizados(?, ?, ?, ?);';
    db.query(consulta, [fechaInicio, fechaFinal, sucursalNombre, estadoServicio], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerReportePagosReservas = (fechaInicio, fechaFinal, sucursalNombre, clienteNombre, callback) => {
    const consulta = 'CALL ReportePagosReservas(?, ?, ?, ?);';
    db.query(consulta, [fechaInicio, fechaFinal, sucursalNombre, clienteNombre], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerIngresosMensuales = (fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro, callback) => {
    const consulta = 'CALL ReporteIngresosFiltradoCompleto(?, ?, ?, ?, ?);';
    db.query(consulta, [fechaInicio, fechaFinal, sucursalFiltro, tipoServicioFiltro, canalPagoFiltro], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerReporteAsesor = (textoFiltro, callback) => {
    const consulta = 'CALL ReporteAsesor(?);';
    db.query(consulta, [textoFiltro], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerReporteVehiculos = (textoFiltro, callback) => {
    const consulta = 'CALL ReporteVehiculos(?);';
    db.query(consulta, [textoFiltro], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};