const main=document.querySelector('#main');
let h2= document.querySelector('h2');
let a= document.querySelector('a');
let contxt= document.querySelector('.content-text');
let hr=document.querySelector('hr');
let brk=document.querySelector('.break');
let button=document.querySelector('.button');
let body=document.body;

button.addEventListener('click', () =>
{
    button.classList.toggle('darkimage');
    body.classList.toggle('darkmode');
})


