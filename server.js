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
        if(err) throw err;
        console.log(JSON.parse(data));
        let parsedData = JSON.parse(data);
        res.send(parsedData);
    });
});

app.post("/api/notes", function(req, res){
    fs.readFile("./Develop/db/db.json", "utf-8", function(err, data){
        if(err) throw err;
        const parsedData = JSON.parse(data);
        req.body.id = uuidv4();
        parsedData.push(req.body);
        fs.writeFile("./Develop/db/db.json", JSON.stringify(parsedData), "utf-8", (err) => {
            if (err) throw err;
        });
        res.json(parsedData);
    });   
});

app.delete("/api/notes/:id", function(req,res){
    fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
        
    });
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});