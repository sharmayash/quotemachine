var express = require('express');
var app = express();

//set the port 
var port = process.env.PORT || 5000
app.use(express.static(_dirname + "/public"));
app.use(favicon(_dirname + '/public/favicon.ico'));
//routes

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("app is started");
})