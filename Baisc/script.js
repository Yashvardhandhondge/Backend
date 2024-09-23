alert("hi");
var arr =[1,2,3,4];
arr.forEach(function(val){
    console.log(val + " hello");
})

var ans = arr.map(function(val){
    return val*3;
})

console.log(ans)

var ans1 = arr.filter(function(val){
    if(val > 3){
        return true;
    }else{
        return false;
    }
})

console.log(ans1)

var ans2 =arr.find(function(val){
    if(val === 2){
        return val
    }
})
console.log(ans2)

var ans3 = arr.indexOf(1);
console.log(ans3)

var obj ={
    name:"Yash",
    age:20,
}
async function right(){
var blob = await fetch('https://randomuser.me/api/');
var res =blob.json();
console.log(res)
}
right()