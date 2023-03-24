const client = require("../server2")
const express = require('express')
const app = express()

app.listen(5000, () => {console.log("listening on http://localhost:5000")})

app.get("/api", (req, res) => {
    res.json({"users": ["userone", "usertwo", "userthree"]})
})

app.get('/users', (req,res) => {
    client.query('Select * From employee', (err, resp) => {
        if(!err){
            console.log(resp.rows)
            res.send(resp.rows)
        }
    });
    client.end;
}) 

client.connect();