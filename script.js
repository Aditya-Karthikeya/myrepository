let dark=document.getElementById("dark");
let btn=document.getElementById("Button");
let btn1=document.getElementById("Button1");
function changecolor(){
    dark.style.backgroundColor="black";
}
function changecolorwhite(){
    dark.style.backgroundColor="aqua";
}
if (dark.style.backgroundColor="aqua"){
btn.addEventListener("click",changecolor);}else{
btn.addEventListener("click",changecolorwhite);}