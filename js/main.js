let but = document.getElementById('button');
but.style.background = 'inherit';
but.style.border = '1px';
but.style.color = '#DD3142';
// document.getElementById('button').style.background = 'inherit';
// document.getElementById('button').style.border = '1px';
// document.getElementById('button').style.color = ' #DD3142';

let elements = document.getElementsByTagName('input');
for (let i = 0; i < elements.length; i++) {
     elements[i].style.borderBottom = '1px solid black';
}
elements[0].placeholder = ' ';
elements[1].value = 'example';
elements[2].value = 'email@mail.com';
elements[5].checked = true;

let repeat = document.getElementById('repeat_block');
repeat.remove();
// let sec = document.getElementById('second_input');
// sec.value = 'example';
// document.getElementById('thirty_input').placeholder='email@mail.com';
// document.getElementById('bottom_chek').checked = true;
// console.log(elements);

