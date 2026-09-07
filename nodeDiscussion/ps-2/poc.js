const {exec} = require('child_process');

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

// const {execFile} = require('child_process');
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



//--------------------------------->fork<-------------------------------->