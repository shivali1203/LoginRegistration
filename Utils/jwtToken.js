const jwt = require('jsonwebtoken');
const secret = "secret"
const generateToken = (user) => {

    const token = jwt.sign(user,secret,{
     
    })

    return token
}

const verifyToken = (token) => {

    const decoded = jwt.verify(token,secret)
    return decoded

}

module.exports = {
    generateToken,
    verifyToken
}