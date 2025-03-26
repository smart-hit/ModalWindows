'use strict'
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

for(let i=0;i<btnsOpenModel.length;i++){
      btnsOpenModel[i].addEventListener('click',function(){
        console.log("button");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      })   
}

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click',closeModal);
btnCloseModel.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
   
    if(e.key==='Escape'&&!modal.classList.contains('hidden')){
      closeModal();
    }
})