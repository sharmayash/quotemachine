var express = require('express');
var app = express();

//set the port 
var port = process.env.PORT || 5000
app.use(express.static(_dirname));

//routes

app.get("/", function(req, res) {
    res.render("quotemachine.html");
})

app.listen(port, function() {
    console.log("app is satrted")
})