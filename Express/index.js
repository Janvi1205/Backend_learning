const express = require("express");
const fs=require("fs");

const app = express();

app.get('/', (req, res) => {
    return res.send("HELLO FROM HOME");
})

app.get('/about', (req, res) => {
    const username = req.query.myname;
    res.send(`my name is ${username}`);
});

app.listen(8001);
