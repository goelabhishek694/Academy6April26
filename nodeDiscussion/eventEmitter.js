const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//listen to an event
const secondCb = (...args) => {
    console.log("another listener for the new event", args);
};

myEmitter.on("myEvent", (...args) => {
    console.log("there is a new event", args);
});

myEmitter.on("myEvent", secondCb);

//emit an event 
myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1,2);
// myEmitter.off('myEvent', secondCb);
myEmitter.emit("myEvent", [1,2,3]);

