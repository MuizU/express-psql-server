"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = 5000;
var app = express();
app.use(express.json());
app.get("/books", function (req, res) { });
app.get("/books:id", function (req, res) { });
app.post("/books", function (req, res) { });
app.put("/book:id", function (req, res) { });
app.delete("/books:id", function (req, res) { });
app.listen(port, function () {
    console.log("Listening on " + port);
});
