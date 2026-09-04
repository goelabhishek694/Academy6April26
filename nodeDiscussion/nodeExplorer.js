// console.log(global);
// console.log("dir name",__dirname,"file name",__filename)
// console.log("process",process.env)
// console.log("process",process.cwd())
// console.log("process",process.argv);
// const args = process.argv.slice(2);
// console.log("args",args);
// const type = args[0];
// const name = args[1];
// console.log("type",type);
// console.log("name",name);
// if(type === "explore"){
//     console.log("exploring the node js");
// }else if(type === "create"){
//     console.log("creating the node js");
// }else if(type === "delete"){
//     console.log("deleting the node js");
// }else{
//     console.log("not exploring the node js");
// }
// console.log("pid",process.pid)

// console.log(process.moduleLoadList);
const fs = require("fs");
const content = Math.random().toString(36).repeat(10000000); //130mb
fs.writeFileSync("random.txt",content);
console.log("file created");


