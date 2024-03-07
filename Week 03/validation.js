const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

// How will you create more schemas if they are given by the user
/*
    Let's create some schemas for some dummy inputs 
    email => email@gmail.com
    password => 8 digits long
    country => "IN", "US"
*/



app.use(express.json());

app.post("/health-checkup", function(req, res){
    // Kidneys - [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    });
});

app.listen(port, function(req, res){
    console.log(`Example app is listening to port ${port}`)
})