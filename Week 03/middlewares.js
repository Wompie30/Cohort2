const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "Vivek" || password != "pass"){
        res.status(400).json({
            "msg": "Something is up with your inputs"
        })
        return
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            "msg": "Something is up with your inputs"
        })
        return
    }

    // DO something with kidney here
    res.json({
        "msg": "Your Kidney is fine!"
    })
})

app.listen(port, (req, res) => {
    console.log(`Example app is listening on port ${port}`);
})