console.log('events')

let myButton = document.getElementById('myButton')
console.log('myButton')

function changeBackgroundcolor() {
    myButton.style = "background-color: green"
}


let color = 'green'


myButton.style = `background-color: ${color}`
function changeColor (){
    console.log('clicked')
    if(color === 'green'){
        color = 'white'
        myButton.style = `background-color: ${color}`
    } else {
        myButton.style =   `background-color: ${color}`
        color = 'green'
    }
}


myButton.addEventListener("click", changeColor)




