// there can be certain tasks that are CPU intensive like image processing, video encoding, etc.

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

function calculateFibonacci(n){
    if(n<=1) return n;
    return calculateFibonacci(n-1) + calculateFibonacci(n-2);
}

app.get('/fib', (req, res) => {
    const { number, requestNumber } = req.query;
    console.log("handler fn ran for req", requestNumber);
    if (!number || isNaN(number) || number <= 0) {
        return res.status(400).json({ error: 'Please provide a valid positive number.' });
    }
    const answer = calculateFibonacci(number);
    // console.log(answer);
    res.status(200).json({
        status: "success",
        message: answer,
        requestNumber
    })
 });
 
 

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});