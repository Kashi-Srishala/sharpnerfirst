// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.script);
// // document.title = 1234
// console.log(document.doctype);
// // console.log(document.head);
// console.log(document.body);
// console.log(document.all[9]);
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'hello';
// // headerTitle.innerText = 'goodbye';
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 10px #666'

// var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red';


//get elements by tag name //

var li = document.getElementsByTagName('li');
// var header = document.getElementById('main-header');
console.log(li);
console.log(li[1]);

// var items = document.getElementsByClassName('list-group-item');
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'red';

for(var i = 0; i<li.length; i++){
    li[i].style.backgroundColor = '#ffffff';
}

