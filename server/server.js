// const express = require('express');
// const app = express();

// app.get("/api", (req,res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
// })

// app.listen(5000, () => {console.log("server started on port 5000")})

const { Client } = require('pg');

const client = new Client({
    host : "capstone-db.cpnp07z8toc2.us-east-2.rds.amazonaws.com",
    port : 5432,
    user : "F4_F2023",
    password : "F4rcoders!",
    database : "intial_db"
}) 

module.exports = client;
// client.connect();
// client.query('SELECT * FROM employee', (err, res) => {
//     if(!err){
//         console.log(res);
//     }else{
//         console.log(err.message);
//     }
//     client.end();
// })