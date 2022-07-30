// styiling by getElementById
let a = document.getElementById('mainHeading')
a.style.color = 'red' 

// getting the ul and appending the new li into it 
let listItems = document.querySelector('ul')
console.log(listItems)
let newItem = document.createElement('li')
listItems.append(newItem)
newItem.innerText = 'swimming'

// setting the attribute for the newely added item
newItem.setAttribute('id','listItem')
 
// modifing the back ground color to the newely appended item
newItem.style.backgroundColor = 'green'


// Dom traversal

let div = document.querySelector('#main_container')
console.log(div.parentNode)
console.log(div.parentElement)
let body = document.querySelector('body')
console.log(body.childNodes)
console.log(div.nextElementSibling)

