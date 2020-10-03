const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express(); 
const PORT = process.env.PORT || 8080; 

app.use(express.static(path.join("./Develop/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join("./Develop/public/index.html"));
});
app.get("/notes", function(req, res){
    res.sendFile(path.join("./Develop/public/notes.html"));
});