function f() {
    console.log('hello functions')
}


// 1.
function f1(x,y) { 
     console.log(Math.pow(x,2) + Math.pow(y,2))
}
f1(2,3)

// 2.
function f2(x,y) {
    console.log(Math.pow(x,2) + 2*x*y + Math.pow(y,2))
}
f2(2,3)

// 3.
 function E(m,c) {
    console.log(m * Math.pow(c,2))
 }
const c = 300000
E(78,c)

// // 4.
// function factorial(x) {
//     let multiplication = 1 
//     for (let i =1 ; i <=x, i++) {
//         multiplication = multiplication * i
//     }
    
//     console.log(multiplication)
// }

// factorial(3)

// 5.
// function f5(x,y) {
//     console.log(math.cos(x) - math.sin(y))
// }
// f5(2,3)

// 6.
function f6(x) {
    console.log(Math.pow(x,3) + Math.pow(x,2) + 5*x + 12)
}
f6(2)

// 7.

function f7(x) {
    console.log(Math.pow(x,2))
}
f7(2)



// 9. 

function multiplyTwoNumbers(x,y) {
    return x + y
}
console.log(multiplyTwoNumbers(4,5))


// 10. 

function multiplyThreeNumbers (x,y,z) {
    const m = x * y * z 
    return m 
}
console.log(multiplyThreeNumbers(4,5,6))
console.log()


// // EX. Ugugdsun toonii ih bagiig oloh

function  findMax(x,y) {
    if (x<y) {
        console.log(y + ' is bigger than ' + x) 
    } else {
        console.log(x + 'is bigger than ' + y)
    }
}
findMax(prompt('give x'),prompt('give y') )