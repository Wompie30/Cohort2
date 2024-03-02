                    // Filter, Map and Arrow Function

// Normal Function
function sum(a,b){
    return a + b;
}

console.log(sum(2,3));

// Arrow Function 
const sum = (a,b) => {
    return a + b;
}

console.log(sum(2, 3));


// Map
/*
   Problem statement - 
    " Given an array, give a new array in which every value is multiplied by 2 as output"
    
    for example
                input - [1, 2, 3, 4, 5];
                output - [2, 4, 6, 8, 10];
*/

// General SOlution
const arr = [1, 2, 3, 4, 5];

// Answer
const newArray = [];

for(let i = 0; i<arr.length; i++){
    newArray.push(arr[i]*2);
}

console.log(newArray);


// Another way of solving above statement is by using map function

// Answer
function transformation(i){
    return i*2;
}
const newArray = arr.map(transformation);
console.log(newArray);

// Another way of representing the arrow function is - 
const newArray = arr.map((i) => {
    return i * 2;
})
console.log(newArray);


// Filter
/*
    Problem Statement -
        "Given an input array, give back all the even values from the array as output"
            for example - 
                input - [1, 2, 3, 4, 5];
                output - [2, 4];
*/

// General Solution
const arr = [1, 2, 3, 4, 5];

// Ans
const newArray = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        newArray.push(arr[i]);
    }
}

console.log(newArray);

// Another way of solving the above problem statement is by using filter

const newArray = arr.filter((i) => {
    if(i%2 == 0){
        return true;
    } else {
        return false;
    }
})
console.log(newArray);