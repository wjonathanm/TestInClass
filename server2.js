// const { Pool } = require("pg")
// const dotenv = require("dotenv")
// dotenv.config()

// const connectDb = async () => {
//     try{
//         const pool = new Pool({
//             user: process.env.PGUSER,
//             host: process.env.PGHOST,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT
//         })
//         await pool.connect()
//         const res = await pool.query('SELECT * FROM employee')
//         console.log(res)
//         await pool.end()
//     }catch (error) {
//         console.log(error)
//     }
// }
// connectDb()

const { Pool } = require('pg');

const pool = new Pool({
    host : "capstone-db.cpnp07z8toc2.us-east-2.rds.amazonaws.com",
    port : 5432,
    user : "F4_F2023",
    password : "F4rcoders!",
    database : "intial_db"
}) 
pool.query('SELECT * FROM employee', (err, res) => {
    console.log(res);
})

// const {Client} = require('pg')

// const client = new Client({
//     host : "capstone-db.cpnp07z8toc2.us-east-2.rds.amazonaws.com",
//     port : 5432,
//     user : "F4_F2023",
//     password : "F4rcoders!",
//     database : "intial_db"
// }) 
// client.connect();

// client.query(`SELECT * FROM employee`, (err, res) => {
//     if(!err){
//         console.log(res);
//     }
//     client.end();
// })
