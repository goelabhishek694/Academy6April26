const m1 = (req, res, next) => {
    console.log("m1");
    next();
}

const m2 = (req, res, next) => {
    console.log("m2");
    next();
}

module.exports = {
    m1,
    m2
}