const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postdata : String,
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const post = mongoose.model('post',postSchema)

module.exports={
    post:post
}