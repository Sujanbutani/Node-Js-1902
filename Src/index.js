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
