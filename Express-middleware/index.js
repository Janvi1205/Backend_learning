console.log("THIS FILE IS RUNNING");
const express = require("express");
const users = require("./Mock_data.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
    req.myusername = "JANVI";
    next();
});

app.use((req, res, next) => {
    console.log("ML2",req.myusername);
    next();

});

app.get("/users", (req, res) => {
    return res.send(users);

});

app.post('/users', (req, res) => {
    const body = req.body
    console.log(req.body);
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./Mock_data.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "pending" })
    })



})

app.listen(8001, () => { console.log("Server started") });
