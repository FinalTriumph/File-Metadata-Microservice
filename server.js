var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer();

app.get("/", function(req, res) {
    res. sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("file"), function(req, res){
    if (req.file === undefined) {
        res.send({"error":"No file selected"});
    } else {
    var ready = {
        "file": req.file.originalname, 
        "size": req.file.size
        };
    res.json(ready);
    }
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Listening on port " + port); 
});