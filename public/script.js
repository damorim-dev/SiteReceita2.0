const modalOverlay = document.querySelector('.modal-Overlay');
const receitas = document.querySelectorAll('.grid-acessos');


for (let receita of receitas){
   
    
    receita.addEventListener("click",function(){
    
    const nomerec = receita.querySelector('.nome-receita').textContent;
    const autor = receita.querySelector('.autor').textContent;
    const urlID = receita.querySelector('.id_receita').textContent;
    console.log(urlID);
    window.location.href=`/recipes/${urlID}`;
})
}




