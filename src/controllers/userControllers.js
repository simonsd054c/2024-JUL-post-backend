const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

async function registerUser(user) {
    const existingUser = await  User.findOne({ email: user.email })
    if (existingUser) {
        return { error: "Email already exists" }
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10)
    // create the user
    const userCreated = await User.create({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        is_admin: false,
    })
    // create the token
    const payload = {
        id: userCreated._id
    }
    const token = jwt.sign(payload, "secret")
    return { token: token, user_id: userCreated._id }
}

module.exports = {
    registerUser
}