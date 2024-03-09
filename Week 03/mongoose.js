const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://wompie30:123456789%40Vivek@cluster0.mukkcmf.mongodb.net/")


const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
})

app.use(express.json());

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    // CRUD operation - Create, Read, Update and Delete
    if(existingUser){
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: "Vivek",
        email: "Vivek@gmail.com",
        password: "123456"
    })

    user.save()
    res.json({
        "msg":"User Created Successfully"
    })
})



