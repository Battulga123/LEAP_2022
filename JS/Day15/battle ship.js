// // EX. Battle ship
// // | x | x | o | o | x | x |
// // | 1 | 2 | 3 | 4 | 5 | 6 |
// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// // let location1 = 3;
// // let location2 = 4;
// // let location3 = 5;

// let locations = [false, false, true,true, true, false, false];
 
// for (let count = 0; count < locations.length; count++){

//     console.log(locations[count])
//  }








// while(!isSunk) {
//     console.log('game begins')

//     let userGuess = Number(prompt('Give me your position?'));
//     guesses = guesses + 1;
//     if (guesses > 6) {
//         console.log(guesses);
//         break;
//     }
//     console.log(guesses);
//     if (userGuess > 0 && userGuess <7) {
//         console.log(userGuess);
//         if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
//             hit = hit + 1;
//             alert('HIT');
//             // if you hit the location1
//             if (location1 == userGuess) {
//                 location1 = -1;
//             }
//             if (location2 == userGuess) {
//                 location2 = -1;
//             }
//             if (location3 == userGuess) {
//                 location3 = -1;
//             }
            
//         } else {
//             alert('MISS');
//         }
//         console.log(hit);
//         if (hit == 3) {
//             isSunk = true;
//         }
//     } else {
//         alert('Give me numbers between 0 and 6');
//     }
// }

// // game loop is ended
// if (isSunk && guesses < 6) {~
//     alert('You WON');
// } else if (guesses > 6) {
//     alert('You LOST');
// } else {
//     alert('You LOST');
// }

// console.log('game ends');