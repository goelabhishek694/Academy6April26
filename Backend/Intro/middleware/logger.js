const logger = (req, res, next) => {
    const startTime = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
    })
    next(); //middleware must call next , to pass the req to next middleware . if it does not , request stops
}

module.exports = {
    logger
}