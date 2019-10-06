const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
var io = require("socket.io")(server);
const PORT = 4000;
server.listen(PORT);
app.set("views", "./public/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", function(req, res) {
  console.log("GET request success");

  io.on("connection", function(socket) {
    console.log("connection made to server");
  });
  res.render("view");
});
