const mongoose = require('mongoose');
const { post } = require('./postmodel');

mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/testing');

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    age: Number,
    posts : [
        {type : mongoose.Schema.Types.ObjectId,
            ref:post
        }
    ]
})

const user = mongoose.model('user',userSchema)
module.exports ={
    user:user
}