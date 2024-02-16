                //Async functions v/s Sync functions
                // Real use of callbacks
                // Promises
                // Async Await

// Synchronous Function

function findsum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }

    return ans;
}

let result = findsum(100);
console.log(result);