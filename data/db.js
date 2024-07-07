const {Sequelize} = require("sequelize");

const db = new Sequelize('CaC_Grupo12_2024', 'cacgrupo12', 'grupo12', {
  host: 'ispcserver1.ddns.net',
  dialect: 'mysql',
  port: 3306,
});

module.exports = db;



















// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'ispcserver1.ddns.net',
//   user: 'cacgrupo12',
//   password: 'grupo12',
//   database: 'CaC_Grupo12_2024'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error al conectarse a la base de datos: ', err.stack);
//     return;
//   }
//   console.log('Conexion exitosa: ' + connection.threadId);
// });

// function closeConnection() {
//   connection.end((err) => {
//     if (err) {
//       console.error('Error al cerrar la conexión: ', err.stack);
//     } else {
//       console.log('Conexión cerrada exitosamente.');
//     }
//   });
// }

// module.exports = { connection, closeConnection };








