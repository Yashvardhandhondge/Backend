const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/pratice');

const UserSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String
})

const user = mongoose.model('user',UserSchema);
module.exports={
    user:user
}