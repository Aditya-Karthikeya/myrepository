let image=document.getElementById('image');
let pas=document.getElementById('pass');
let butt=document.getElementById('butt');
let par=document.getElementById('par');
image.addEventListener('click',()=>{
    if (image.src.includes('icons8-eye-24.png')) {
        image.src = 'icons8-closed-eye-50.png';
        pas.type = 'password'; 
        pas.style.backgroundColor='cadetblue';
        pas.style.color='white';
      } else {
        image.src = 'icons8-eye-24.png';
         pas.type='text';
         pas.style.backgroundColor='white';
         pas.style.color='cadetblue';
      }
})
butt.addEventListener('click',()=>{
    if(pas.value ==='hi'){
        par.innerText='*wrong password';
        par.style.color='tomato';
    }else{
        par.innerText=""
    }
})