const express = require('express');
const app = express();

//middleware -> parse data from client to server
// puts data in req.body
//this line is executed for every request
app.use(express.json());

app.get("/greet",(req,res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body); //data is sent from clinet(FE) to server(BE)
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.protocol);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.path);
    // res.send("Hello World");
    res.json({message: "Hello World"});
});

app.post("/upload",(req,res) => {
    console.log(req.body);
    res.json({message: "File uploaded successfully"});
});

//temp data storage -> reset whwnver server is restarted
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jim"},
];

app.get("/users",(req,res) => {
   const updatedUsers = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: "john@example.com"
        }
    });
    res.json({
        message: "Users fetched successfully",
        data: updatedUsers
    });
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});