//  ===> EX. Ugugdsun toonii tsifruudiin niilberiig oloh

// Sting uyed

// let count = 0 ;
// let a = "12356" ;
// let  sum = 0 ;

// while (count < a.length) {
//     console.log(a.charAt(count)) ;
//     sum=sum+Number(a.charAt(count));
//     count = count + 1 ;
// }
// console.log(sum)


// number uyed

let  sum = 0
let rem = 0
let  n = 0
 
n = Number (prompt ('give number'))

// while (n >0) {

//     rem = n % 10
//     sum = sum + rem 
//     n= Math.floor(n/10)
// } console.log(sum)


// for version
 for ( ; n>0 ;) {
    rem = n % 10
    sum = sum + rem 
    n= Math.floor(n/10)
 } 
    console.log(sum)
