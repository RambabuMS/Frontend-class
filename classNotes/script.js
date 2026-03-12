// Javascript
// Dynamically typed
// what is variable
// A variable is a container to store data
// var, let and const
// ES6 - EcmaScript version 6
// let a = 123;
// a = "dilip";
// console.log(a, "name");
// // Hoisting
// // TDZ - Temporal Dead zone
// // data types
// // primitive and Non Primitive Data Types
// // Primitive Data Types
// // string, number, boolean, bigint, symbol, undefined, null
// let names = "Nirmal";
// // let age = 25;
// let isLearning = true;
// let x = null;
// let y;
// console.log(y, "console y");
// console.log(typeof names);
// console.log("Hi Guys Welcome to Javascript");
// // alert("Hi I am Alert box");
// // alert("I am Javascript");
// // undefined vs null
// // Nan vs undefined
// // Non Primitive data types
// // array and object
// // array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr1 = ["a", "b", "c", "d"];
// // object - key value pair
// let obj = {
//   name: "Dilip",
//   class: "MERN",
//   age: 20,
// };
// // Arithmetic operators
// // + - * / %

// let c = 3;
// let d = 5;
// console.log(c + d);
// // comparison operators
// //  >, <, >=, <=, ==, ===, !==
// let e = 5;
// let f = "5";
// console.log(e == f, "==");
// console.log(e === f, "===");
// // == checks for value only
// // === checks for value and type
// // logical operators
// // && - And, || - OR, ! - NOT
// // age should be greater than 25 or should be working
// // age > 25 || !isWorking
// // Conditions
// let age = 17;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible to vote");
// }
// let marks = 59;

// if (marks > 90) {
//   console.log("Grade A");
// } else if (marks > 60) {
//   console.log("Grade B");
// } else {
//   console.log("Grade c");
// }

// // DOM manipulation
// function changeText() {
//   // alert("Alert box");
//   document.getElementById("title").innerText = "Welcome to Javascript";
//   const value = document.getElementById("inputvalue").value;
//   document.getElementById("inputdata").innerText = "You entered " + value;
// }

// // loops

// // for(initilaization; condition; increment/decrement) {
// // }

// let users = ["Nirmal", "Dilip", "Ajay"];
// for (let i = 0; i < users.length - 1; i++) {
//   console.log(users[i], "user");
// }

// // while loop
// // while(condition) {
// //   }

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // do while loop
// // do{
// //   //
// // }while (condition)

// let j = 10;

// do {
//   console.log(j);
//   j++;
// } while (j < 5);

// // for of loop (Best for arrays)
// const colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color, "color");
// }

// // for in loop (for objects)

// const user = {
//   name: "Dilip",
//   age: "25",
//   location: "chennai",
// };
// for (let key in user) {
//   console.log(key, user[key], "forinloop");
// }

// // forEach (array)

// const fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach(function (fruit) {
//   console.log(fruit, "fruit");
// });

// // functions
// // reusable block of code
// hello("Nirmal");
// hello("Dilip");
// function hello(name) {
//   console.log(name, "name");
// }
// function sum(a, b) {
//   // const temp = 10;
//   // console.log(temp, "c");
//   return a + b;
// }
// console.log(sum(2, 3));

// // block and global scope
// // variable - block scoped and global scoped
// // function - block scoped
// // var is global scope
// // let and const block scoped

// // if (true) {
// //   const city = "Chennai";
// // }
// // console.log(city);

// let sample = 10;

// if (true) {
//   let sample = 20;
// }

// console.log(sample);

// // function without parameter
// // function with parameter
// // function with return statement
// // Arrow function

// // const functionName = () => {}
// const addition = (a, b) => a + b;
// console.log(addition(5, 6));

// const greet = (a, name) => {
//   if (a > 5) {
//     console.log(name);
//   }
//   return a;
// };
// // function expression

// const greeting = function () {
//   console.log("function");
// };

// // anonymous function
// // function without name
// // common callbacks

// // setTimeout(function () {});

// // function() {
// //   console.log('test')
// // }

// fruits.forEach(function (fruit) {
//   console.log(fruit, "fruit");
// });

// //IIFE

// (function () {
//   console.log("I run immediately!");
// })();
// (function (name) {
//   console.log("Hello " + name);
// })("Nirmal");

// (function () {
//   let secret = "Hidden Data";
//   console.log(secret);
// })();
// // array methods
// // push()
// const fruitsList = ["apple", "banana"];
// fruitsList.push("orange");

// console.log(fruits);
// // pop()
// fruitsList.pop();
// console.log("fruitsList::: ", fruitsList);
// //unshift() - to add an element from beginning
// //shift() - to remove an element from beginning

// // slice()
// // extracts a portion from an array
// // does not modify original array

// // Array.slice(start,end)
// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.slice(1, 4);
// const results = numbers.slice(2);

// console.log("result::: ", result);
// console.log("results::: ", results);

// //splice()
// // adds or removes items
// // modifies the original array
// // returns the removed items

// // Array.splice(start, deleteCount, newItems)

// const numberList = [10, 20, 30, 40, 50];

// // numberList.splice(1, 2);
// // console.log("numberList::: ", numberList);

// // numberList.splice(1, 0, 60);

// numberList.splice(1, 1, 100);
// console.log("numberList::: ", numberList);

// // map

// const numbersList = [1, 2, 3, 4, 5];

// const valuesList = numbersList.map((number) => number * 5);
// console.log("valuesList::: ", valuesList);

// // FILTER
// const ages = [12, 18, 25, 14];

// const adults = ages.filter((age) => age >= 18);
// console.log(adults);

// // Reduce

// const prices = [100, 200, 300];

// const total = prices.reduce((sum, price) => sum + price, 25);
// console.log(total);

// // find() - returns the first match

// const userData = [
//   { id: 1, name: "Dilip" },
//   { id: 2, name: "Nirmal" },
//   { id: 3, name: "Raj" },
//   { id: 2, name: "Kumar" },
// ];

// const usersData = userData.find((u) => u.id === 2);
// console.log(usersData);

// // includes()

// const skills = ["HTML", "CSS", "JS"];
// console.log(skills.includes("JS"));

// // object methods

// // access object properties

// // object.keyname
// // object["keyname"]

// const objlist = {
//   name: "Nirmal",
//   age: 25,
//   city: "Hyderabad",
// };

// console.log(objlist.name);
// console.log(objlist["age"]);

// console.log(Object.keys(objlist));
// console.log(Object.values(objlist));
// console.log(Object.entries(objlist));

// for (let [key, value] of Object.entries(objlist)) {
//   console.log(key, value);
// }

// //hasOwnProperty()
// objlist.location = "chennai";
// objlist["address"] = "Tiruvanmiyur";
// console.log("objlist::: ", objlist);

// delete objlist.location;
// console.log(objlist.hasOwnProperty("location"));

// getElementById

const uiValue = document.getElementById("title").innerText;
console.log("uiValue::: ", uiValue);
document.getElementById("title").innerText = "Welcome to Javascript";

//querySelector
const header = document.querySelector("h1");
const header1 = document.querySelector("#title");
console.log("header::: ", header1);
// const items = document.querySelectorAll("#title");
// console.log("items::: ", items);
document.querySelector("h2").innerHTML =
  "<span style='color:red'>Class on DOM</span> Manipiulation";
document.querySelector(".sample").innerHTML = `
     <h1>Hi Nirmal</h1>
     <p>This is DOM Manipulation</p>
     <div>We can directly give html in JS</div>
`;

// Events

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  alert("Button clicked");
});

const input = document.querySelector(".input");
const output = document.querySelector(".output");

input.addEventListener("input", () => {
  output.innerText = input.value;
});

const valuesString = ["HTML", "CSS", "JS"];
// document.createElement("ul");
// const list = document.querySelector(".list");

// valuesString.forEach((skill) => {
//   list.innerHTML += `<li>${skill}</li>`;
// });

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 },
];

const container = document.getElementById("products");

products.map((product) => {
  container.innerHTML += `
    <div class="card">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    </div>
  `;
});

const p = document.createElement("p");
p.innerText = "Hello Created Element";
document.getElementById("container").appendChild(p);

const items = ["Apple", "Banana", "Orange"];

const list = document.querySelector(".list");

items.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

const card = document.createElement("div");
card.innerText = "Product Card";
card.style.background = "lightblue";
card.style.padding = "10px";
document.body.appendChild(card);

const listOfItems = [
  {
    name: "chair",
    price: "200",
    weight: "200",
  },
  {
    name: "table",
    price: "500",
    weight: "220",
  },
  {
    name: "stool",
    price: "150",
    weight: "100",
  },
  {
    name: "cupboard",
    price: "2000",
    weight: "500",
  },
];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const list = document.getElementById("apiUsers");
    users.forEach((user) => {
      list.innerHTML += `<li>${user.name}</li>`;
    });
  });

// const stringData = JSON.stringify(listOfItems);
// console.log("stringData::: ", stringData);
// console.log("stringData::: ", typeof stringData);

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Nirmal",
//     username: "NirmalRaj",
//     email: "Nirmal@kory.org",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json, "response"));
// json.stringify
// json.parse

// callback function
// A callback is a function passed as an argument to another function and
// executed after a task is completed
// function welcome(name, callback) {
//   console.log("Hello", name);
//   callback();
// }

// welcome("Nirmal", function () {
//   console.log("Welcome!!");
// });

// function fetchData(callback) {
//   console.log("start");
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
//   console.log("end");
// }
// fetchData((result) => {
//   console.log(result);
// });

// Advantages

// ✔ Simple to implement
// ✔ Good for small async tasks

// ❌ Disadvantages

// ✘ Causes callback hell (nested callbacks)
// ✘ Difficult to maintain and handle errors
// ✘ Hard to read
//callback hell
// login(user, pass, () => {
//   getProfile(() => {
//     getPosts(() => {
//       getComments(() => {
//         console.log("Done");
//       });
//     });
//   });
// });

//Promise
// Promise -  A Promise represents the result of an asynchronous operation,
//  allowing us to handle success (resolve) and failure (reject).
// 3 stages pending, resolve, reject

// let fetchData = new Promise((resolve, reject) => {
//   let res = true;
//   if (res) {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Data not found");
//     }, 2000);
//   }
// });

// fetchData
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// ⭐ Advantages

// ✔ Cleaner & readable than callbacks
// ✔ Avoids callback hell using .then() chaining
// ✔ Better error handling using .catch()

// ❌ Disadvantages

// ✘ Still looks chained when many .then() are used
// ✘ Syntax can become complex

//promise chaining

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Ravi" });
//     }, 1000);
//   });
// }

// function getOrders(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Order1", "Order2", "Order3"]);
//     }, 1000);
//   });
// }

// function getTotalPrice(orders) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(orders.length * 500); // 3 orders × ₹500
//     }, 1000);
//   });
// }

// getUser()
//   .then((user) => {
//     console.log("User:", user);
//     return getOrders(user); // return next Promise
//   })
//   .then((orders) => {
//     console.log("Orders:", orders);
//     return getTotalPrice(orders); // return next Promise
//   })
//   .then((price) => {
//     console.log("Total Price:", price);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// async await
// async/await is built on top of Promises and lets you write
// asynchronous code like synchronous code — very clean & readable.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("Data received"), 2000);
//     resolve("Data received");
//   });
// }

// async function displayData() {
//   try {
//     setTimeout(() => console.log("test data1"), 5000);
//     const result = await fetchData();
//     console.log(result);
//     console.log("test data2");
//     console.log("Async await is working");
//   } catch (error) {
//     console.log(error);
//   }
// }

// Advantages

// ✔ Very clean & readable
// ✔ No chaining like .then()
// ✔ Debugging is easier
// ✔ Best for sequential async operations

// ❌ Disadvantages

// ✘ Must be used with Promises
// ✘ If not handled properly, async calls can be blocked accidentally
// ✘ Error handling must be done using try/catch

// displayData();

// Tasks:
// 1. Callback hell to Promise
// 2. Promise chaining to async await
// 3. Error handling in all 3

// const student = "nirmal";

// console.log("Welcome" + " " + student);

//template literals

// console.log(`Welcome ${student}`);
// let num = "5";
// let c = 6;

// console.log(num + c, typeof num);
// console.log(+num + c, "number");

// // destructuring
// array
const numbers = [10, 20, 30];
numbers[0];
numbers[1];
const [i, j, k] = numbers;

console.log(i, j, k, "numbers");

//object
const users = { username: "Nirmal", location: "chennai" };

const { username: studentName, location: area } = users;

console.log(studentName, area, "users");

//spread operator

const numArray = [1, 2, 3, 4, 5];

const newArray = [6, 7, 8, 9, 10];

const resultArray = [...numArray, ...newArray];
console.log("resultArray::: ", resultArray);

const userData = { name: "Nirmal", location: "Thiruvanmiyur" };

const updateUser = { ...userData, age: 25 };
console.log("updateUser::: ", updateUser);

// Mutable and Immutable

//rest parameter/operator

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum([1, 2, 3]));
// Expected output: 6

console.log(sum(1, 2, 3, 4));

function myFun(a, b, ...rest) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", rest);
}

myFun("one", "two", "three", "four", "five", "six");
// array function
const greet = () => console.log("test");

setTimeout(() => {}, 3000);

// map
// ternary operator
// conditional rendering

let age = 17;
let location = "Chennai";
let result = age > 18 && location === "Mumbai" ? "Not Eligible" : "Eligible";

console.log(result, "result");

// template literals
// optional chaining

let usersList = [
  {
    name: "Nirmal",
    age: "25",
    city: "chennai",
  },
  {
    name: "Nirmal",
    age: "25",
  },
  {
    name: "Nirmal",
    city: "chennai",
  },
];

usersList[1].city;

// undefined error - avoid
