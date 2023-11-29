const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "project_management",
  })
  .promise();

module.exports = pool;
