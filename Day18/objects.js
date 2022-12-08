

console.log('lesson Objects')

let rabbit1 = {
    color: 'white',
    rName: 'Chandaga',
    gender: 'male',
    age: 2,
    jump: function() {
        console.log('sorry i broke my leg');
    },
    sayMyName: function (myName) {
        console.log('Your name is ${myName}');
    }
}


console.log(rabbit1)
console.log(rabbit1.color)
rabbit1.color = 'Shavhai'
rabbit1.jump()
rabbit1.sayMyName('Tulgaa');

let rabbit2 = {
    color: 'brown',
    rName: 'bujin',
    gender: 'female',
    age: 5,
    jump: function () {
        console.log('i can jump')
    }
}

console.log('Rabbit2 speaks')

console.log(rabbit2)
let rabbits = [rabbit1, rabbit2]
console.log(rabbits)
rabbit2.jump()



