const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express(); 
const PORT = process.env.PORT || 8080; 

app.use(express.static(path.join("./Develop/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});



app.get("/api/notes", function(req, res){
    fs.readFile("./Develop/db/db.json", function(err, data){

    });
});

app.post("/api/notes", function(req, res){
    fs.readFile("./Develop/db/db.json", "utf-8", function(err, data){
    
    });   
});

app.delete("/api/notes/:id", function(req,res){
    fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
        
    });
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});