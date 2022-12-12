// let a = "hi";
// let b = "hi";

// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);


// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);

// // EX. Ternary

// let result = 10;

// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.log('less than 10');
// }

// result > 10 ? (result < 11 ? console.log(test): console.log('hi')) : console.log('less than 10');

// // EX. Tip

// const tip1 = 3000 ;
// const tip2 = 27500 ;
// const tip3 = 100000;


// if (5000>= tip1 && 30000<= tip1) {
//     console.log(tip1*0.15);
// }  else {
//     console.log('busad bodoh 20%')
// }

// let tipResult2 = (5000>= tip2 && 30000<=tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
// console.log(tipResult2)

// let tipResult1 = (5000>= tip1 && 30000<=tip1) ? tip1 * 0.15 + tip1: tip1 * 0.2 + tip1;
// console.log(tipResult1)

// let tipResult3 = (5000>= tip3 && 30000<=tip3) ? tip3 * 0.15 + tip3: tip3 * 0.2 + tip3;
// console.log(tipResult3)



// // // EX. Dund
// const studentPoint = Number(prompt('Give me your score'))
// const studentName = prompt('give me your name')
// let studentResult1 = 'Mash muu'
// let studentResult2 = 'Hangalttai'
// let studentResult3 = 'Dund'
// let studentResult4 = 'Sain'
// let studentResult5 = 'Mash sain'

// if (studentPoint < 60) {
//     alert(studentName + studentResult1)
// } else if (60 <= studentPoint && studentPoint < 70) {
//     alert(studentName + ' -' +studentResult2)
//     console.log(studentName)
// } else if (70 <= studentPoint && studentPoint < 80) {
//     alert(studentName + studentResult2)
// } else if (80 <= studentPoint && studentPoint < 90) {
//     alert(studentName + studentResult2)
// } else if (90 <= studentPoint && studentPoint < 100) {
//     alert(studentName + studentResult2)
// } 


// console.log(`${studentName} - ${studentPoint} - ${studentResult1} `)

// // Ex. Tusgai temdegt

// ===> .lenght

// console.log('its log')
// console.error('its error');

// const str = "Life, the universe and everything.";
// console.log(str.length); 

// let ID = prompt('inset your ID')

// if (ID.length  !=  10) {
//     alert('Buruu')
// } else {
//     alert('ok')
// }
// console.log(ID)
// console.log(ID.charAt(0))
// console.log(ID[1]);


// ===> charAt

// console.log(str.charAt(0))
// console.log(str[1]);


// ===> toUpperCase()

// console.log(str.toLocaleUpperCase())
// console.log(str.toLocaleLowerCase())

// // ===> .concat()
// let fistName = 'John'
// let fullName = fistName.concat('', 'Smith')
// console.log(fullName);
// console.log(fistName)


// ===> .substr

// console.log(ID.substr(0,5))


// ===> EX.ID check


// const IDletter = (ID.substr(0,2))
// const IDnumber = (ID.substr(2,9))

// if (ID.length == 10 && !Number.isInteger(Number(IDletter)) && Number.isInteger(Number(IDnumber)) ) {
//         console.log('Register is correct')
//     } else {
//         console.log('Register is wrong')
//     }
// <Resgisteriing dugaariin ehnii 2 oron useg too holildson baival zuv garaad bsng zasah!!>

// ===> EX.Phone number


let phone = prompt('Insert your phone number ')

const phoneplus = phone.substr(0,4)
const phonenumber = phone.substr(4,8)

console.log(phone)
console.log(phoneplus)
console.log(phonenumber)

if (phone.length == 12 && phoneplus == '+976' && Number.isInteger(Number(phonenumber)) ) {
    console.log('Phumber is correct')
} else {
    console.log('Phone number is wrong')
}


