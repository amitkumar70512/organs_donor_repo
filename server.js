var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var bodyParser = require('body-parser');


app.get("/", function (req, res) {
    res.render("pages/index");
  });
app.get("/:id", function (req, res) {
    res.render(`pages/${req.params.id}`);
  });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})