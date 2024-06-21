const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'ispcserver1.ddns.net',
  user: 'cacgrupo12',
  password: 'grupo12',
  database: 'CaC_Grupo12_2024'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos : ', err.stack);
    return;
  }
  console.log('Conexion exitosa : ' + connection.threadId);
});

module.exports = connection;