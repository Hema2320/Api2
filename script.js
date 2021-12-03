const url1="https://api.quotable.io/random"
let btn=document.getElementById("btn");
let data=document.getElementById("data")
let data1=document.getElementById("data1")
btn.addEventListener("click", async function(){
try
{
    let res= await fetch(url1);
    let obj=await res.json();
     console.log(obj);
     data.innerHTML=`<div>Content:${obj.content}</div><br>`
     data1.innerHTML=`<div>Author:${obj.author}</div>`
    }
 catch(err){
     document.write("Error")
 } 
}) ; 