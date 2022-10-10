const close_button = document.querySelector('.close_button');
const nav_links = document.querySelector('.nav_links');
const hamburger = document.querySelector('.hamburger');
const arrowDownOne = document.querySelector('.arrowDownOne');
const arrowDownTwo = document.querySelector('.arrowDownTwo');
const sub_list_1 = document.querySelector('.sub_list_1');
const sub_list_2 = document.querySelector('.sub_list_2');


arrowDownOne.addEventListener('click', ()=> {
    arrowDownOne.classList.toggle('rotate');
    sub_list_1.classList.toggle('switch');
});

arrowDownTwo.addEventListener('click', ()=> {
    arrowDownTwo.classList.toggle('rotate');
    sub_list_2.classList.toggle('switch');
});

// CLOSE BUTTON AND HAMBURGER FUNCTIONALITY
close_button.addEventListener('click', ()=> {
    nav_links.classList.toggle('switch');
});

hamburger.addEventListener('click', ()=> {
    nav_links.classList.toggle('switch');
});