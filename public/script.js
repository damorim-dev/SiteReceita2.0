const modalOverlay = document.querySelector('.modal-Overlay');
const receitas = document.querySelectorAll('.grid-acessos');
const btning = document.querySelector('.btn-ing');
const btnmodo = document.querySelector('.btn-mod');
const btninfo = document.querySelector('.btn-info');

for (let receita of receitas){
   
    
    receita.addEventListener("click",function(){
    
    const nomerec = receita.querySelector('.nome-receita').textContent;
    const autor = receita.querySelector('.autor').textContent;
    const urlID = receita.querySelector('.id_receita').textContent;
    console.log(urlID);
    window.location.href=`/recipes/${urlID}`;
})
}



//for (let esc of esconder){
    btning.addEventListener("click",function(){
    if (btning.classList.contains('esconder')){    
        btning.classList.remove('esconder')
        btning.textContent='MOSTRAR';
        const ing = document.querySelector('.ingredients').style.display='none';
    }
    else{
        ing=document.querySelector('.ingredients').style.display='block';
        btning.textContent='ESCONDER';
        btning.classList.add('esconder')
    }
    })
//}
btnmodo.addEventListener("click",function(){
if (btnmodo.classList.contains('esconder')){
    btnmodo.classList.remove('esconder')
    btnmodo.textContent='MOSTRAR';
    const modo = document.querySelector('.modo').style.display='none';
}
else{
    modo=document.querySelector('.modo').style.display='block';
    btnmodo.textContent='ESCONDER';
    btnmodo.classList.add('esconder')
}
})

btninfo.addEventListener("click",function(){
    if (btninfo.classList.contains('esconder')){
        btninfo.classList.remove('esconder')
        btninfo.textContent='MOSTRAR';
        const info = document.querySelector('.info-ing').style.display='none';
    }
    else{
        modo=document.querySelector('.info-ing').style.display='block';
        btninfo.textContent='ESCONDER';
        btninfo.classList.add('esconder')
    }
    })



