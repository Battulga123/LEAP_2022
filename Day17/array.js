// ==> Array at function
console.log('arrays methods')

function findAt(arr, index) {
    return arr[index]
}

const array1 = [1, 2, 3, 4, 5]
console.log(findAt(array1, 0))

// // ==> CONCAT function

// function arrConcat(arr1, arr2) {
//     let concatedArray = []
//     for (let i = 0; i < arr2.length; i++) {
//         concatedArray.push(arr2[i])
//     }
//     for(let i =0; i<arr1.length; i++) {
//         concatedArray.push(arr1[i])
//     }

//     return concatedArray

// }

// let arrayC1 = [1, 2, 3]
// let arrayC2 = [4, 5, 6]
// console.log(arrConcat(arrayC1, arrayC2))


// // ==> INCLUDES




// // ==> INDEXOF

let findIndex = function (arr, number){
    let index= -1;
    for(let i = 0; i<arr.length; i++){
        if(number===arr[i]) {
            index=1
        }
    }
    return index
}

const arrIndex= [1, 2, 3]
console.log(findIndex(arrIndex, 3))
console.log(findIndex(arrIndex, 2))
console.log(findIndex(arrIndex, 10))
console.log('test to test indexof method of array')



// // ==> JOIN

// let funcJoin= (arr, symbol)




// // ==> POP 

let popFunc = (arr) => {
    const lastIndex = arr.length - 1
    let poppedArray = []
    for (let i = 0; i <arr.length; i++) {
        if( i != lastIndex){
            poppedArray.push(arr[i])
        }
    }
return poppedArray
}
const popArray = [1, 2, 3]
console.log(popFunc(popArray))
console.log(popFunc([12, 4, 3, 5, 6]))

console.log('pop array method')
const popArrayResult 