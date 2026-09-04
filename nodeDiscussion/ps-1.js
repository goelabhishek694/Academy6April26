// Problem statement : How can a Node.js application effectively serve large files, such as a 400MB video for eg, without exhausting the server's RAM and cache resources?

const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request",(req,res)=>{
    fs.readFile("random.txt",(err,data)=>{
        if(err) throw err;
        res.end(data);
    });
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
