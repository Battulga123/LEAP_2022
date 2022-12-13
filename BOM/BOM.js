// console.log(window)

// window.open('https://www.google.com/', 'hello')

// let result = confirm('Та устгахдаа итгэлтэй байна уу ?');
// let message = result ? 'Та OK товчийг дарлаа' :
// 'Та Cancel товчийг дарсан';
// alert(message);



// let alertButton = document.getElementById('alertButton')
// let cancelButton = document.getElementById('cancelButton')
// alertButton.addEventListener('click', () => {
//     console.log('alert buttin is clicked')
// })
// cancelButton.addEventListener('click', () => {
    
// })





let counter = 0

let startMyTimer = document.getElementById('startTimer');
startMyTimer.addEventListener('click', runTimerInterval)
function runTimerInterval () {
    window.setInterval(startInterval, 1000)
}

function startInterval() {
    let now= new Date()
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML= now.getSeconds()
}

