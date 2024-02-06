'use strict';

// Lesson 63. ClassList и делегирование событий 

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'jjjjjjj'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else {
        btns[1].classList.remove('red');
    }
    btns[2].classList.toggle('red')
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);

    // if (event.target && event.target.tagName == 'BUTTON'){
    //     console.log('Hello');
    // }

    // if (event.target && event.target.classList.contains('blue')){
    //     console.log('Hello');
    // }

    if (event.target && event.target.matches('button.red')){
        console.log('Hello');
    }
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);