const mysql = require('mysql2');

// create db connection

const pool = mysql.createPool({
    connectionLimit:10, // maximum number of connection in the pool
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    port: 3306,
    database: process.env.DB_NAME,
});

// promisify the pool query method for ease of with async/await 

const promisePool = pool.promise();
module.exports = promisePool;