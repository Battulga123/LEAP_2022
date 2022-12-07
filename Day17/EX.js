// // // EX1. Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false буцаадаг функц бичнэ үү. 

// // function findMin(x,y) {
// //     if (x>y) {
// //         return x 
// //     } else {
// //         return y 
// //     }
// // }

// // console.log(findMin(10,7))


// // // EX2. өгөгдсөн array-ны элементүүлэг хэвлэдэг функц бичнэ үү. 

// function printAray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// printAray(array)


// // // EX3.Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. 

// console.log('EX3')
// let findArrayMax = function (arr) {
//     let max = -1
//     for (let i = 0; i < arr.length; i++) {
//         if (max <= arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findArrayMax(array))


// // // EX4.Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг функц бичнэ үү. 
// console.log('ex4')
// let findArraAverage = (arr) => {
//     let sum= 0
//     for(let i = 0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     const average = sum / arr.length
//     return average
// }
// console.log(findArraAverage(array))