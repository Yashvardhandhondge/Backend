const mongoose = require('mongoose');
const { string } = require('zod');
const ObjectId = mongoose.Types.ObjectId;

const user = new mongoose.Schema({
    email : String,
    password : String,
    firstname : String,
    lastname : String
},{timestamps:true})

const admin =new mongoose.Schema({
    email:String,
    password:String,
    firstname:String,
    lastname:String
},{timestamps:true})

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:String,
    imageUrl : String,
    creatorId:ObjectId,
    category:String,
    difficulty:String
})

const purchase = new mongoose.Schema({
userId:ObjectId,
courseId : ObjectId,
transactionId:String,
paymentMethod:String
},{timestamps:true})

const usermodel = mongoose.model('user',user);
const adminmodel = mongoose.model('admin',admin);
const course = mongoose.model('course',courseSchema);
const purchasemodel = mongoose.model('purchase',purchase);

module.exports ={
    usermodel:usermodel,
    adminmodel : adminmodel,
    course : course,
    purchasemodel : purchasemodel
}
