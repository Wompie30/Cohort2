                            // Revision of Week 01

// Synchronous Function                            

function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumOfSquares(a,b){
    let square1 = square(a); // 1 ^ 1 = 1
    let square2 = square(b); // 2 ^ 2 = 4
    return square1+square2; // 1 + 4 = 5
}

function sumOfCubes(a,b){
    let cube1 = cube(a); // 1 ^ 1 ^ 1 = 1
    let cube2 = cube(b); // 2 ^ 2 ^ 2 = 8
    return cube1+cube2; // 1 + 8 = 9
}

let ans1 = sumOfSquares(1,2);
let ans2 = sumOfCubes(1,2);
console.log(ans1);


// Here We are repeating ourselves and performing the same task again and again
// Concept of DRY - Don't Repeat Yourself

function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}


// Generic Function
function sumOfSomething(a,b,fn){
    let ans1 = fn(1);
    let ans2 = fn(2);
    return ans1 + ans2;
}

let ans1 = sumOfSomething(1,2,square);

console.log(ans1);


// Asynchronous Function

// Approach 1 - Wrapping another async function

function myOwnSetTimeOut(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeOut(function(){
    console.log("Hello my name is Vivek");
}, 5000)


// Approach 2 - Using Promise

function myOwnSetTimeOut(duration){
    let p = new Promise(function(resolve){
        //after 1 second, call resolve
        setTimeout(resolve, duration)
    });
    return p;
}

myOwnSetTimeOut(1000).then(function(){
    console.log("Log the first thing");
})