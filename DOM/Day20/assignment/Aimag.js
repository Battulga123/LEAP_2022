
console.log('exercises');

console.log(document.getElementById('aimag-101').innerHTML);
console.log(document.getElementById('aimag-522').innerHTML);
console.log(document.getElementById('aimag-315').innerHTML);
document.getElementById('aimag-315').innerHTML = 'Bavaria'

document.getElementById('aimag-101').style = 'font-size: 20px;'

for (let i = 0; i < document.getElementsByClassName('khangai').length; i++) {
    document.getElementsByClassName('khangai')[i].style = 'font-size: 35px; background-color: magenta;'
}

console.log(document.getElementById('aimagNames').id)
const liLength = document.getElementById('aimagNames').getElementsByTagName('li').length;
console.log(document.getElementById('aimagNames').getElementsByTagName('li')[liLength - 1].innerHTML);

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-1'))

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: bisque;'
    }
}

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-2')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: yellow;'
    }
}

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-3')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: grey;'
    }
}

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-4')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: green;'
    }
}







// document.querySelector('#demo').innerHTML = "Date : " + Date()

// document.querySelector("img").src = "/JS/Day03/Picture/index.png"

// const newDiv = document.createElement("h2");
// const newContent = document.createTextNode("?????????? ???????????? ???????????? ??????????");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("body");
// main[0].appendChild(newDiv);