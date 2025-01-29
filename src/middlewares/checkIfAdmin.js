const checkIfAdmin = (req, res, next) => {
    // if (req.headers.authorization) {
    //     // extract the token
    //     // verify the token
    //     // extract the user id from the token
    //     // get the user from the db using that user id
    //     // check whether the user is admin or not
    // }
    const isAdmin = false
    if (isAdmin) {
        req.isAdmin = isAdmin
        next()
    } else {
        res.status(403).json({
            error: "Only an admin can perform this action"
        })
    }
}

module.exports = checkIfAdmin