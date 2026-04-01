const userName = require("./user");
const os = require("os");
const fs = require("fs");
const http = require("http");

// console.log("Welcome to Nodejs", userName);
// console.log("Version", os.version());
// console.log("Processor", os.cpus());

// file system
// const data = "sample text file";
// fs.writeFile("test.txt", data, (err) => {
//   console.log("file created");
// });

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err, "error");
//   }
//   console.log(data, "data");
// });

// const data = "appending data to the file";
// adding in existing file
// fs.appendFile("./test.txt", data + "\n", (err) => {
//   console.log("data appended");
// });

//read directory
// fs.readdir("../classNotes", (err, files) => {
//   if (err) {
//     console.log(err, "error");
//   }

//   console.log(files, "files");
// });

// remove a file
// fs.unlink("./test.txt", (err) => {
//   if (err) {
//     console.log(err, "error");
//   }
//   console.log("file removed");
// });
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end("Welcome to Nodejs Server");
});
console.log("testing nodemon");

server.listen(PORT, (err) => {
  console.log(`server started at ${PORT}`);
});
