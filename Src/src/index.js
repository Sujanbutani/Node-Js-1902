<<<<<<< HEAD
const express= require('express')
const http=  require('http');
const bodyParser=require('body-parser')
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config = require("./config/config")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);


connectDB();


const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 8080!");
});

// http.createServer(function(req,res){
//     res.write("hello wold");
//     console.log('okk')
//     res.end();
// }).listen(8080,console.log('okk'))
=======
const http = require('http');
const express = require("express");
const { connectDB } = require("../src/db/dbconnection");
const config = require("../src/config/config");
const routes = require("./routes/v1")
const app = express();

app.use("/v1", routes);

// app.use((req,res,next) => {
//   next(new Error("Route not found"));
// });
connectDB();

// create server using http
const server = http.createServer(app);

server.listen(config.port, () =>{
  console.log("server listning port number 8080");

});

// http.createServer(function (req, res) {
//   res.write('sujan');
//   res.end();
// }).listen(8080);
>>>>>>> 6c227765286340479432a94662befdae2ca0ef97
