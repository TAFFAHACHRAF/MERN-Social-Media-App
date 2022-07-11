const express = require("express");
const app=express();
const mongoose = require("mongoose")
require("dotenv/config")
const bodyParser = require("body-parser")
const postRoute = require("./routes/posts")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use('/posts' , postRoute)                       



app.get('*', (req, res) => {
    res.send("ouheohuefhuehfuefhui")
});
// Connect to db

mongoose.connect("mongodb+srv://achraf:achraf1234@rest.gqdmg.mongodb.net/?retryWrites=true&w=majority", function(err) {
    if (err) { 
      console.log(err);
      } else {
      console.log("connected to db!")
    }
  });



app.listen(3000)