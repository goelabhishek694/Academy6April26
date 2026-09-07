const {exec, execFile, spawn, fork} = require('child_process');

// exec('ls -lh', (err, stdout, stderr) => {
//     if(err){
//         console.error(`Error: ${err.message}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
// })

// exec('somerandomcommand', (err, stdout, stderr) => {
//     if(err){
//         console.error(`Error: ${err.message}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
// });


// exec('grep "someText" randomFile.txt' ,(err,stdout,stderr)=>{
//     if (err) {
//         console.error(`exec error: ${err.message}`);
//         if (stderr) {
//             console.error(`stderr: ${stderr}`);
//         }
//         return;
//     }
//     console.log(`Number of files ${stdout}`);
//  })
 

//------------------------->execFile<-------------------------------->

// // The path to the script file
// const scriptPath = './script.sh'; // Use 'script.bat' for Windows

// // Arguments to pass to the script
// const args = ['arg1', 'arg2'];

// // Executing the script with arguments
// execFile(scriptPath, args, (error, stdout, stderr) => {
//    if (error) {
//        console.error(`Execution error: ${error}`);
//        return;
//    }
//    console.log(`stdout: ${stdout}`);
//    console.error(`stderr: ${stderr}`);
// });


//------------------------->spawn<-------------------------------->
// genrallly used to eun differen programs 

// the spawn method launches a new child process. it is usued to execute a command in new process and you can use it to run any command , not nust nodejs Scripts. 
//when spawn method is called it creates a new child process and streams the output and error streams of that process.
// the spwan method is typically used for a long lived process that generate a large amount of output , such as log collection proces. 

// use cases:
// 1. when u need to run a command line tool or script that us not a nodejs module. 
// 2. when u need to handle large amoutn of data from the child process, as spawn stream the data. image processing ,log processing . 

spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["https://www.youtube.com/", "--incognito"])



//--------------------------------->fork<-------------------------------->

// We Use fork when you need to create a new Node.js process that shares some or all of the parent process’s memory and runtime environment, and when you need to communicate between the parent and child processes using IPC. eg running a cpu intensive task
// b) We Use spawn when you need to spawn a new process / program and stream its output and error streams back to the parent process. Basically just get the work done and report its status
// c) fork and spawn differ in communication style:
// Imagine two teams working on a project:
// Spawn (Email Communication): One team uses only emails (standard input/output streams) to communicate. They send detailed instructions and get back a report when the task is done. This is like spawn, which is good for tasks that don't need back-and-forth discussion.
// Fork (Instant Messaging): The other team uses instant messaging (IPC channel) for quick, two-way chats. They can send messages, get immediate responses, and adjust their requests on the fly. This is like fork, beneficial for tasks that need ongoing conversation and immediate feedback.