const express = require('express')
const { createPool } = require('mysql2');
require('dotenv').config();


const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    timezone:'utc'
})

pool.getConnection((err, connection) => {
    if (err) {
        //console.log("database not found")
        //return {message:"connection not establish"}
        //return res.send({ status: 400, message: err });
        //return err;
       console.log("database not found");
        //throw err;
    }else
    console.log("Connected as ID", +connection.threadId)

})

module.exports = pool;