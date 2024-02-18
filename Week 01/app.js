                //Async functions v/s Sync functions
                // Real use of callbacks
                // Promises
                // Async Await

// Synchronous Function

// function findsum(n){
//     let ans = 0;
//     for(let i=0; i<n; i++){
//         ans += i;
//     }

//     return ans;
// }

// let result = findsum(100);
// console.log(result);


// Asynchronus Function

// function findSum(n){
//     let ans = 0;
//     for(let i=0; i<n; i++){
//         ans += i;
//     }

//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 2000); // Task Delegated
// console.log("I'll be shown first on console then the findSumTill100 will be");



// Some Common Async Functions Provided by Java Script Itself
// setTimeOut() 
// fs.readFile - to read a file from your file system

// Some Common examples of inbuilt Async Functions that are provided by JavaScript itself.

// const fs = require("fs");
// // File system Module

// fs.readFile("hello.txt", "utf-8", function(err, data){
//     console.log(data);
// })

// console.log("Hello World");


                            //Promises
                
const fs = require('fs');

//my own asynchronous function
function viveksReadFile(){
    return new Promise(function(resolve){
        fs.readFile("hello.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

//callback function to call
function onDone(data){
    console.log(data);
}

viveksReadFile().then(onDone);

// At higher level promises have three states
// => Pending, Resolve and Rejected 

var d = new Promise(function(resolve){
    resolve("Promise Resolved");
})

function callback(){
    console.log(d);
}

d.then(callback);