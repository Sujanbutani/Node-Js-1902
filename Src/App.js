var http = require('http');
const express = require("express")
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
// const app = express()
// app.listen(8080);


app.use("/v1", routes);

http.createServer(function (req, res) {
  res.write('sujan');
  res.end();
}).listen(8080);