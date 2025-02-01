const express = require("express")

const {
    registerUser,
    loginUser,
} = require("../controllers/userControllers")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const bodyData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const token = await registerUser(bodyData)
    if (token.error) {
        res.status(409).json(token)
    } else {
        res.json(token)
    }
})

userRouter.post("/login", async (req, res) => {
    const bodyData = {
        email: req.body.email,
        password: req.body.password
    }
    const token = await loginUser(bodyData)
    if (token.error) {
        res.status(401).json(token)
    } else {
        res.json(token)
    }
})

module.exports = userRouter