const express = require('express');
const app = express();

const {user} = require('./usermodel');


app.get('/',(re,res)=>{
    res.send("Hey")
})

app.get('/create',async (req,res)=>{
 let createduser=  await user.create({
       name:"Yash",
       email:"yash1@gmail.com",
       username:"Yash1"
    })

    res.send(createduser)
})

app.get('/update',async (req,res)=>{
 let updateduser = await   user.findOneAndUpdate({
        username:"Yash"
    },{name:"Yashvardhan chaturbhuj dhondge"},{new:true});
    res.send(updateduser)
})

app.get('/read',async (req,res)=>{
   let usres = await user.find();
   res.send(usres)
})

app.get('/user',async (req,res)=>{
    let users = await user.findOne({username:"Yash1"});
    res.send(users)
})

app.get('/delete',async (req,res)=>{
    let users = await user.findOneAndDelete({username:"Yash"});
    res.send(users) 
})

app.listen(3000)