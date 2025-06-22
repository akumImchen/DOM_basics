
// 1.selecting the element in js 
let a=document.querySelector("h1");
//2. changing the content of the element 
a.innerHTML="yoooss";
console.log(a);

// 3.changing css 
a.style.color="red"
a.style.backgroundColor="black";

// event listener
a.addEventListener("click",function(){
    // console.log("stfu bitchh");
    a.innerHTML="stfu bitch";
    
})

let b=document.querySelector("#bulb");
let c=document.querySelector("button");
let flag=0;

c.addEventListener("click",function(){
    if(flag==0){
    b.style.backgroundColor="yellow";
    flag=1;
    }
    else{
        b.style.backgroundColor="transparent";
        c.innerHTML="OFF";
        flag=0;
    }  
})
let d=document.querySelectorAll("h2");
d.forEach(function(e){
    e.innerHTML="yess";
})

//getting an element through id
let f=document.getElementById("class");
f.style.color="red";

let box=document.getElementById("box");
box.innerHTML="<h1>Hello</h1>";
box.textContent="<h6> hello</h6>"