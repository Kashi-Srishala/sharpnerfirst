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

// var li = document.getElementsByTagName('li');
// // var header = document.getElementById('main-header');
// console.log(li);
// console.log(li[1]);

// // var items = document.getElementsByClassName('list-group-item');
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'red';

// for(var i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = '#ffffff';
// /}

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 40px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND'

var item =document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'orange';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'blue';


var titles = document.querySelectorAll('.title');

// console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i= 0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f2f2f2';



//childnode

// console.log(itemList.children);
itemList.children[2].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';


// /LAst Child
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextsibling

// console.log(itemList.nextSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement 
// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello_guru';

// Add id
newDiv.id = 'hello_ID';

// console.log(newDiv);


// Add attr

newDiv.setAttribute('title','Hello_div');

// create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);




