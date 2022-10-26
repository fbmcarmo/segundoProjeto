var express = require("express");

var fs = require("fs");

var app = express();

var html = fs.readFileSync("index.html");

app.get("/", function(request, response){
    response.end(html);
});

app.listen(8888, function(erro){
    if(erro){
        console.log(erro);
    } else {
        console.log("Servidor está on...");
    }
});