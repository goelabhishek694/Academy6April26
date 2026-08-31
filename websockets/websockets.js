// will be used to handle routing, logic, middleware . specific to web handling req. 
const express = require("express");

// manages to the lower-level http communicaiton b/w server and client for bi-directional communication
const http = require("http");
const {Server} = require("socket.io");

const app = express();
app.use(express.static("public"));

//creates an http server instance, this server listens for network req and can serve both http and websocket requests. 
const server = http.createServer(app);

// creates a new instance of the socket.io server, it will be used to handle websocket connections. it sets up special endpoint to serve client side library , that endpoint is /socket.io/socket.io.js
const io = new Server(server);

io.on("connection", (socket) => {
    let room;
    console.log("a user connected", socket.id);
    // setInterval(() => {
    //     socket.emit(
    //       "message",
    //       "message from server - " + socket.id + " at " + new Date()
    //     );
    //   }, 2000);
    
    socket.emit("message", "message from server")

    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
    });

    socket.on("message", (data) => {
        console.log("message received", data);
        socket.broadcast.emit("broadcast", data);
    });

    socket.on("create_grp", (roomId) => {
        console.log("group created", roomId);
        room = roomId;
        socket.emit("join_room");
    });

    socket.on("join_room", () => {
        console.log(socket.id + " joined the room ", 100);
        socket.join(100);
    });

    socket.on("grp message", (data) => {
        console.log("message received in group", data);
        socket.to(room).emit("serv_grp_message", data);
    });
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

