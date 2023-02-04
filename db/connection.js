const mysql = require("mysql");

const connectionConfig = {
    database: process.env.MYSQLDATABASE || "",
    host: process.env.MYSQLHOST || "localhost",
    password: process.env.MYSQLPASSWORD || "password",
    port: process.env.MYSQLPORT || 5000,
    user: process.env.MYSQLUSER || "root",
}

mysql.createConnection(connectionConfig)