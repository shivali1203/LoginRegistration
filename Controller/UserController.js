const userModel = require('../Model/UserModel')
const response = require('../Utils/Responses')
const consts = require('../Utils/constants')
//const encryption = require('../Utils/Encryption')
const jwtToken = require('../Utils/jwtToken')
const mailer = require('../Utils/Mailer')


module.exports.addUser = async (req, res) => {
    //const users = Object.assign({}, req.body)
    //users.password = await encryption.encryptPassword(req.body.password)
    try {

        const user = await userModel.create(req.body)
        if (user) {
            const token = jwtToken.generateToken(user.toObject())
            res.json(
              response.succesResponse(
                "POST",
                token,
                "User added"
              )
             
            );
        }
        else {
            res.json(
                response.failureResponse(consts.BAD_REQUEST, "BAD REQUEST")
            )
        }
    }
    catch (e) {
        console.log(e)
    }
}
module.exports.getAllUsers = async (req, res) => {
    try {

        const getUsers = await userModel.find()
        console.log(getUsers)
        if (getUsers) {
            res.json(response.succesResponse("GET", getUsers, "All the users retrieved"))
        } else {
            res.json(response.failureResponse(consts.BAD_REQUEST, "bad request try again later"))
        }
    }
    catch (e) {
        console.log("error occured", e)
    }
}
module.exports.loginUser = async (req, res) => {

    try {
        console.log(req.body.email)
        const user = await userModel.findOne({ email: req.body.email })
       
        if (user != null || user != undefined || user == 1) {

            if (user.password == req.body.password) {
                
                const token = jwtToken.generateToken(user.toObject())
                res.json(
                  response.succesResponse(
                    "POST",
                    token,
                    "User logged in successfully"
                  )
                 
                );
            } else {
                res.json(response.failureResponse(consts.NOT_MODIFIED, "comes 1"))

            }

        }
        else {
            res.json(response.failureResponse(consts.NOT_MODIFIED, "not modified"))
            console.log(response.failureResponse(consts.NOT_MODIFIED, "comes 2"))
        }
    }


    catch (e) {

        console.log("ERROR     :-------   ", e)
    }
}

module.exports.signUP = async (req, res) => {

    try {
        const user = Object.assign({}, req.body)
        user.password = encryption.encryptPassword(req.body.password)
        const dummy = await userModel.find({ email: req.body.email })
        if (dummy == null || dummy == undefined || dummy == 0) {
            const user = Object.assign({}, req.body)
            user.password = await encryption.encryptPassword(req.body.password)
            const createdUser = await userModel.create(user)
            if (createdUser) {
                res.json(
                    response.succesResponse("POST", createdUser, "user successfully created")
                )
                mailer.sendMail(req.body.email, "welcome")
            }
            else {
                res.json(
                    response.failureResponse(consts.NOT_IMPLEMENTED, "USER NOT CREATED")
                )
            }
        }
        else {
            res.json(
                response.failureResponse(consts.NOT_IMPLEMENTED, "Email already exists")
            )
        }

    }
    catch (e) {
        console.log(e)
        response.json(
            response.failureResponse(consts.INTERNAL_SERVER_ERROR, "server error , user not created")
        )
    }
}

module.exports.changeStatus = async (req, res) => {
    try {
        const email = req.params.email
        const user = await userModel.updateOne({ email: email }, { $set: { Status: True } })
        if (user) {
            res.json(
                response.succesResponse(PUT, user, "updated")
            )
            console.log(user, response.succesResponse(PUT, user, "updated"))
        }
        else {
            res.json(response.failureResponse(consts.NOT_MODIFIED, "not modified"))
            console.log(response.failureResponse(consts.NOT_MODIFIED, "not modified"))
        }
    }
    catch (e) {
        console.log(response.failureResponse(consts.INTERNAL_SERVER_ERROR, "internal server error"))
    }
}