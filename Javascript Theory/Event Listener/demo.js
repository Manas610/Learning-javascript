var x =document.querySelector("h1");
var input = document.querySelector("input");
var button = document.querySelector("button");

button.addEventListener("click",function(){
    x.innerHTML=input.value;
});