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

io.on("connection", function(socket) {
  console.log("connection made to server");
});

io.on("signal", function() {
  console.log("How to make this execute on 'signal'?");
});

app.get("/", function(req, res) {
  console.log("GET request success");
  res.render("view");
});
