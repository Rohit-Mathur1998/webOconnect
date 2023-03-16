const express = require('express');
const bodyParser = require("body-parser");
const pool = require('./database');
require("dotenv").config();
const app = express();
var multer = require("multer");
var upload = multer();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//const cors = require('cors');
//app.use(cors());

app.use(express.json());

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//     ////console.log(file.originalname);
//   },
// });


// var upload = multer({
//   storage: storage,
// });



app.use(upload.array());

//app.get("/",emp1 );
//app.use('/APro/Admin', require('./routes/AdminRoutes.js'));

//const axios = require("axios");


app.use('/webOconnect', require('./routes/userRoute'))

app.get('/',(req,res)=>{

  res.send("Hello!")

})


app.listen(port, (err) => {
    if (err) {
      //console.log("databse not found");
      console.log(err);
    } else {
      console.log(`Server Is Running At PORT: ${port}`);
    }
  });