var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var bodyParser = require('body-parser');

const collection = require("./mongodb");
app.use(express.urlencoded({extended:false}))
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



// handling post api
app.post("/donate",async (req,res)=>{
    console.log("inside post donate");
    const patientname = req.body.firstname +" "+req.body.lastname;
    // current timestamp in milliseconds
        let ts = Date.now();

        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        const patientid = req.body.firstname+"bmsce"+date+""+month+""+year;
        // prints date & time in YYYY-MM-DD format
        console.log(year + "-" + month + "-" + date);
    const data = {
        _id : patientid,
        name : patientname,
        city : req.body.city

    }

    await collection.insertMany([data])

    res.send(`<h1>data inserted <h1> ${data.name}`)

})