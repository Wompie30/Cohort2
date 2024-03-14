const express = require("express");
const app = express();
const port = 3000;


// Function that returns a boolean if the age of the person is more than 18.
// function isOldEnough (age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// The above checking using function is a way to check but we have a better way to check is by using middlewares

// Checking via Middlewares (there will be slightly change in the Syntax)
function isOldEnoughMiddleware (req, res, next) {
    const age = req.query.age;
    if (age >= 18) {
        next();
    } else {
        res.json({
            msg: "Sorry! Your age did not met the guidelines."
        })
    }  
}


app.get("/ride1", isOldEnoughMiddleware, function(req, res) {
    // if(isOldEnough(req.query.age)){
        res.json({
            msg: "You have successfully taken ride 1"
        });    
    // } else {
    //     res.status(411).json({
    //         msg: "Sorry your age did not met the criteria"
    //     })
    // } 
});

app.get("/ride2",isOldEnoughMiddleware, function(req, res) {
    // if(isOldEnough(req.query.age)){
        res.json({
            msg: "You have successfully taken ride 2"
        });    
    // } else {
    //     res.status(411).json({
    //         msg: "Sorry your age did not met the criteria"
    //     })
    // } 
});

app.listen(port, (req, res) => {
    console.log(`Example app is listening on port ${port}`);
})
