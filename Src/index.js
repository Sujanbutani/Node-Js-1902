const http = require('http');
const express = require("express");
const { connectDB } = require("../src/db/dbconnection");
const config = require("../src/config/config");
const routes = require("./routes/v1")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", routes);
connectDB();

// create server using http
const server = http.createServer(app);

// parse application/json

// http.createServer(function (req, res) {
//   res.write('sujan');
//   res.end();
// }).listen(8080);
server.listen(config.port, () =>{
  console.log("server listning port number 8080");
});