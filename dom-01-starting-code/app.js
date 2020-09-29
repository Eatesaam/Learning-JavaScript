const ul = document.body.firstElementChild.nextElementSibling;
const firstli = ul.firstElementChild;

const section = document.querySelector('section');
section.style.backgroundColor = 'blue';
const button = document.querySelector('button');


section.className = 'red-bg';

button.addEventListener('click', ()=>{
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invivible';
    // }else{
    //     section.className = 'red-bg vivible';
    // }
   // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

//console.log(firstli);





















// const h1 = document.getElementById('main-title');
// h1.textContent = 'Some New Title';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'red';


// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + 'changed!';


// //const listElements = document.querySelectorAll('li');
// const listElements = document.getElementsByTagName('li');

// for (const listEl of listElements) {
//     console.dir(listEl);
// }