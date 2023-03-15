const hamburger = document.querySelector('.hamburger')
const hamup = document.querySelector('.hamup');
const hammid = document.querySelector('.hammid');
const hamdown = document.querySelector('.hamdown');
const menubar = document.querySelector('.menubar')




hamburger.addEventListener('click' , e =>{
    hamup.classList.toggle('hamupnew')
    hammid.classList.toggle('hammidnew')
    hamdown.classList.toggle('hamdownnew')
    menubar.classList.toggle('menubarnew')
})