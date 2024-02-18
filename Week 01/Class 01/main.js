// console.log("Hello World");


                        // Simple Primitives

// Variables - let, var and const
// Data Types - strings, numbers and booleans
// if-else
// loops - for loop (majorly used loop)


// Problem - Write the program to greet a person give their first and last name
// let firstName = "Vivek";
// let lastName = "Shukla";

// console.log("Hi, My name is " + firstName + lastName);


// Problem - Write a program that greets a person based on their gender. (if else)


// Problem - Write a program that counts from 0 to 1000 and prints. (For-loop)
// let sum = 0;
// for(let i=1; i<=1000; i++){
//     sum = sum + i;
// }
// console.log(sum);


                            // Functions

// function a() {
//     console.log("This is a");
// }

// a();

// Funciton and Function Callback
// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's Result is: " + data);
// }

// let ans = sum(5,5);
// displayResult(ans);



// Constraints given for the above problem
// -> You are only allowed to call one function after this
// -> How will you display result of a sum

// function sum(num1, num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's Result is: " + data);
// }

// sum(5,5,displayResult);

                            // Asynchronous Functions

// How does js do the same? can JS Delegate? Can JS Context Switch?
// -> Yes, by Using Asynchronous Function

// Example - setTimeOut();

// function findSum(n){
//     let ans = 0;
//     for(let i=0; i<n; i++){
//         ans += i;
//     }

//     return console.log(ans);
// }

// function findSumTill100(){
//     return findSum(100);
// }

// setTimeout(findSumTill100, 2000);
// console.log("I'll run first then setTimeOut will");

