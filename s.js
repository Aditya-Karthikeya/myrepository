let nam=document.getElementById("name");
let button=document.getElementById("btn");
function name1(){
    a=["Amma","Nanna","Akka"];
    i=Math.floor(Math.random() * a.length);
    nam.innerText=a[i];
}
button.addEventListener("click",name1);