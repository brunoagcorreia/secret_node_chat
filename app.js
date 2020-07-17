// import benötigte Packages & initialisieren Server
const express = require("express");
let app = express();
let server = require("http").Server(app);
let socket = require("socket.io")(server);

// View Verzeichnis mit 'root' Verzeichnis verknüpfen

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routing: Chatroom
app.get('/', function(req, res){
  res.render("chatroom");
});

// Noch nicht erstellt
// socket.on("helloServer", function(message){
//   console.log("Client angemeldet" + message.name + "grüst züruck")
// })

// socket.on('chat message', function(message){
//     console.log("Client angemeldet" + message.name + "grüst züruck")
// })

socket.on("connection", function(socket){
  console.log("Client angemeldet")
  socket.emit('welcome');
  socket.on("newMessage", function(obj){
    // "obj.nachricht" ist nicht erstellt
    // console.log("Client " + obj.nachricht + " sagt Hi");
    socket.broadcast.emit("newMessage", obj)
  })
  // socket.emit("welcome");
})

server.listen(8080);
