const mongoose = require('mongoose')

const schema = mongoose.Schema

const user = schema({
    name:{
        type:String
    },
    email:{
        type:String
    }, 
    password:{
        type:String
    }, 
    birthDate:{
        type:Date
    },
    Status:{
        default:false,
        type:Boolean
    },
  
})

module.exports = mongoose.model('users', user)