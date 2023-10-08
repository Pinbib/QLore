console.clear();

const express = require("express");

let app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.query);
    console.log("GET");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.post("/", (req, res) => {
    console.log(req.query);
    console.log("POST");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.delete("/", (req, res) => {
    console.log(req.query);
    console.log("DELETE");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.put("/", (req, res) => {
    console.log(req.query);
    console.log("PUT");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.patch("/", (req, res) => {
    console.log(req.query);
    console.log("PATCH");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.head("/", (req, res) => {
    console.log(req.query);
    console.log("HEAD");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.options("/", (req, res) => {
    console.log(req.query);
    console.log("OPTIONS");
    if (req.query.login === "true") {
        res.status(200).send(!req.query.login);
    } else if (req.query.login === "false") {
        res.status(200).send(!req.query.login);
    } else {
        res.status(300).send("ERROR");
    }
});

app.listen(3000);