'use strict';
const show_modal=document.querySelectorAll(".show-modal");
const close_modal=document.querySelector(".close-modal");
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

const display_modal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hidden_modal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<show_modal.length; i++){
    show_modal[i].addEventListener('click',display_modal);
}

close_modal.addEventListener('click',hidden_modal);
overlay.addEventListener('click',hidden_modal);

document.addEventListener('keydown',function(event){
    if(event.key=='escape' ){
        if(!modal.classList.contains('hidden')){
        hidden_modal();
    }}
})