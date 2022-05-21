console.log(document);    // accessing the whole page
// alert('Hello.... Prolly wont run')
// Accessing the body
console.log(document.body);
// Accessing the head
console.log(document.head);
// Assessing the html (root)
console.log(document.documentElement);
// Assessing the title
console.log(document.title);
// document.title = 'Agege bread'
// What if...
// console.log(document.body.myH1);
console.log(document.querySelector('section #yueyu'));
// console.log(document.querySelectorAll('h1')[1]);
// const allH1 = document.querySelectorAll('section .section-heading')
// console.log(allH1[2]);

// let h1 = document.getElementById('yueyu')
// console.log(h1);

// let h1 = document.getElementsByClassName('section-heading')
// console.log(h1);

// let vs var
// Global Scope
// let myName = 'Myke'
// Function Scope
function sayMyName () {
    var afam = 'Myke'
}
console.log(afam);
// Block Scope
// {
//     var age = 121
// }

// console.log(age);
// for (let val = 0; val <= 5; val++) {
//     console.log(val);
// }

// let val = 'obi'

// console.log(val, 'from outside');

    // const myH1 = document.getElementsByTagName('h1')
    // console.log(myH1[0]);

    let h1 = document.querySelector('h1')
    // Finding a parent
    console.log(h1.parentElement);

    // Finding a sibling
    // console.log(h1.nextElementSibling);
    // console.log(h1.nextSibling);
    // console.log(h1.previousElementSibling.parentElement);
    console.log(h1.className);
    h1.classList.add('henry')
    h1.classList.remove('first')
    h1.classList.toggle('second')
    console.log(h1.classList);

    // creating html element
    let myDiv = document.createElement('div')
    myDiv.classList.add('my-div')
    myDiv.innerHTML = 'Content is king'

    // Insert the div into the webpage
    // document.body.prepend(myDiv) // Insert at the beginning of the webpage
    // document.body.append(myDiv) // Insert at the end of the webpage
    let sect3 = document.querySelector('#sect3')
    // beforebegin - Inserts content before the element begins
    // afterbegin - Inserts content after the element begins
    // beforeend - Inserts content before the element ends
    // afterend - Inserts content after the element ends
    sect3.insertAdjacentElement('afterbegin', myDiv) // Inserts an element at a particular position
    sect3.insertAdjacentHTML('afterend', '<button>click</button>')
    // sect3.insertAdjacentText('afterend', '<button>click</button>')
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        // myDiv.classList.toggle('my-div')
        myDiv.remove()
        setTimeout(function () {
            sect3.insertAdjacentElement('afterbegin', myDiv)
        }, 3000)
    })