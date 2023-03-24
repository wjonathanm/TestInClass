const client = require("./server")
const express = require('express')
const app = express();

app.get('/employees', (req,res) => {
    client.query('SELECT * FROM employee', (err, resp) => {
        if(!err){
            console.log(resp)
            res.send(resp);
        }
    });
    client.end()
}) 
app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
    client.end();
})
client.connect();

let port = 5000
app.listen(port, () => {console.log("server started on http://localhost:" + port)})