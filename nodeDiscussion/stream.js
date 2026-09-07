const fs = require('fs');
const path = require('path');

const newFilePath = path.join(__dirname, 'newFile.txt');
const writableStream = fs.createWriteStream(newFilePath);

const readableStream = fs.createReadStream('random.txt');

// readableStream.on("data", (chunk) =>{
//     console.log(`Received chunk: ${chunk.length} bytes`);
//     // console.log(chunk.toString());
//     // writableStream.write(chunk);
// });

readableStream.pipe(writableStream);

readableStream.on("end", () => {
    console.log("finished reading and writing the file");
});

