const mysql = require("mysql2");
require("dotenv").config();

const connectionConfig = {
  database: process.env.MYSQLDATABASE || "testing",
  host: process.env.MYSQLHOST || "localhost",
  password: process.env.MYSQLPASSWORD || "password",
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER || "root",
};

const dbConnection = mysql.createPool(connectionConfig);

if (dbConnection){
  console.log("Connected to DB");
}

const query = (queryString, vals) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(queryString, vals, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
    query
}

//export default query;
