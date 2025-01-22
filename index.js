// import express
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({
        data: "Hello World!!"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        data: "Another route named hello"
    })
})

app.listen(3000, () => {
    console.log("Server started")
})