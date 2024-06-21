const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'ispcserver1.ddns.net',
  user: 'cacgrupo12',
  password: 'grupo12',
  database: 'CaC_Grupo12_2024'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;