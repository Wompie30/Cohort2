const express = require('express');
const app = express();
const port = 3000;

/*
    - You have been given a Express Server which has a few endpoints
    - Your task is to create a global middleware (app.use) which will maintain a count of the number of
      requests made to the server in the global request count variable
*/

let requestCount = 0;

app.get("/requestCount", function(req, res) {
    res.status(200).json({requestCount})
})


// Global Middleware is called only for below two end points that are get endpoint and post endpoint.
app.use(function(req, res, next) {
    requestCount = requestCount + 1;
    next();
})

app.get("/user", function(req, res) {
    res.status(200).json({name: 'Vivek'})
})

app.post("/user", function(req, res) {
    res.status(200).json({msg: 'Creates dummy user'})
})

app.listen(port, function(req, res) {
    console.log(`Example app is running on port number ${port}`)
})