const userName = require("./user");
const os = require("os");
// const fs = require("fs");
const http = require("http");
const fs = require("fs/promises");

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

// const server = http.createServer((req, res) => {
//   // res.end("Welcome to Nodejs Server");
//   if (req.url === "/") {
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.end("About Page");
//   } else {
//     res.end("404 Not Found");
//   }
// });
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const data = fs.readFileSync("./home.html");
//     res.end(data);
//   }
// });

// json response
// const server = http.createServer((req, res) => {
//   if (req.url === "/api") {
//     const data = {
//       name: "Nirmal",
//       role: "Developer",
//     };

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(data));
//   }
// });

// console.log("Start");
// const data = fs.readFileSync("./home.html", "utf-8");
// console.log(data);
// console.log("End");

// console.log("Start");
// fs.readFile("./home.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("End");
// server.listen(PORT, (err) => {
//   console.log(`server started at ${PORT}`);
// });

// console.log("start");
// fs.readFile("./home.html", "utf-8").then((data) => {
//   console.log(data);
// });
// console.log("End");

//callback hell
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1");
      resolve();
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2");
      resolve();
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3");
      resolve();
    }, 1000);
  });
}

// Promise.all([Promise.reject("A"), Promise.reject("B")])
//   .then(console.log)
//   .catch(console.log);

// Promise.allSettled([Promise.reject("A"), Promise.reject("Error")]).then(
//   console.log,
// );

// Promise.race([
//   new Promise((res) => setTimeout(() => res("slow"), 3000)),
//   new Promise((res) => setTimeout(() => res("fast"), 2000)),
//   new Promise((res, rej) => setTimeout(() => rej("fast1"), 2000)),
// ]).then(console.log);

Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success"),
  Promise.resolve("Success2"),
]).then(console.log);

// step1().then(step2).then(step3).catch(console.log);

// async function run() {
//   await step1();
//   await step2();
//   await step3();
// }
// run();
