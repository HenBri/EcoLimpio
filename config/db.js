const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecolimpioexpress'
});

connection.connect((error) => {
    if (error) {
        console.log("No se logró conectar:", error);
    } else {
        console.log("Se logró conectar a la base de datos");
       
    }
});
module.exports = connection;