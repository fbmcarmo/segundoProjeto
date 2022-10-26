var express = require("express");

var app = express();

app.get("/", function(request, response){
    response.end();
});

app.listen(8888, function(erro){
    if(erro){
        console.log(erro);
    } else {
        console.log("Servidor está on...");
    }
});