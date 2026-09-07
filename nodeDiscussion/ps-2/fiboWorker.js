function calculateFibonacci(n){
    if(n <= 1){
        return n;
    }
    return calculateFibonacci(n-1) + calculateFibonacci(n-2);
}

process.on("message", ({number}) => {
    const result = calculateFibonacci(number);
    process.send(result);
});

