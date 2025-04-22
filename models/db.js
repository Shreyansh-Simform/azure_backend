const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'empdock_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;

