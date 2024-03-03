const express = require('express');
const app = express();
const port = 3000;


// Basic Hello World syntax for express.js
// app.get("/", (req, res) => {
//     res.send("Hello World")
// })


/*
    Request Methods -
        * GET
        * POST
        * PUT
        * DELETE
    
    status Codes - 
        * 200
        * 400
        * 500
        * 411
*/

/*
    Problem Statement - 
        "You need to create 4 routes ( 4 Things that the hospital can do )"

        1 > GET - User can check how many kidneys they have and their health
        2 > POST - User can add a new Kidney
        3 > PUT - User can replace a kidney, make it healthy
        4 > DELETE - User can remove a kidney
*/

/*
    Let's start by creating an in memory array that looks something like this
*/

let user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(express.json());

console.log(user[0]);

// For GET -
app.get("/", (req, res) => {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i = 0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// For POST - 
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"    
    })
})

// For PUT - 
app.put("/", (req, res) => {
    for(let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
})


// For DELETE - 
app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i=0; i<user[0].kidneys.healthy; i++){
        newKidneys.path({
            healthy: true
        })
    }
    user[0].kidneys = newKidneys;
    
    res.json({
        msg: "Done"
    })
})

app.listen(port, () => {
    console.log(`app is listening to port number ${port}`)
})