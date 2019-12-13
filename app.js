// let server = require("http").Server(app);
// let socket = require("socket.io")(server);

// let server = require("http");
const express = require("express");
let app = express();
let server = require("http").Server(app);
let socket = require("socket.io")(server);

// server.Server(app);
// let socket = require("socket.io")(server);

// let app = express();
// let server = require("http")

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");




// var app = require('http').createServer(handler)
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(80);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

app.get('/', function(req, res){
  res.render("chatroom");
});

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
    console.log("Client " + obj.nachricht + " sagt Hi");
    socket.broadcast.emit("newMessage", obj)
  })
  // socket.emit("welcome");
})

server.listen(8080);