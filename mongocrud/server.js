const express = require("express");
const app = express();
const {user} = require('./usermodel1');
const { post } = require("./postmodel");



app.use(express.json());

app.get('/',function(req,res){
    res.send("hey");
})

app.get('/create',async (req,res)=>{
 let users = await user.create({
    username:"Yash",
    age:20,
    email:"Yash@gmail.com"
 })


 res.send(users)
})

app.get('/post/create',async (req,res)=>{
  let posts = await  post.create({
       postdata:"Hello kase aahat",
       user :"66e94401d294df47b6cd2765"
    })

   let users = await user.findOne({_id:"66e94401d294df47b6cd2765"});
   users.posts.push(post._id)
   await users.save();
   res.send({
    posts,users
   })
})


app.listen(3000);