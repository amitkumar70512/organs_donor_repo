var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var bodyParser = require('body-parser');
// mongo db configs using cllg e-id
const mongoose = require('mongoose')

const url = `mongodb+srv://amit:amit@organsdonor.cd5433k.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

/////

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