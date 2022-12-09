
function findOlderStudents(array) {
    for (let i = 0; i < array.length; i++) {
        if (2022 - array[i].birthOfYear >= 20) {
            console.log(array[i].name)
        }
    }
}

function findAge(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name, '-', 2022 - array[i].birthOfYear)
    }
}

function findSingle(array) {
    for (let i = 0; i < array.length; i++) {
       if (array[i].single == true){
        console.log(array[i].name, '- is single')
       } 
    }
}

const students = [
    {
        name: 'Tulgaa',
        birthOfYear: 1997,
        hobby: 'hiking',
        single: false
    },
    {
        name: 'Babi',
        birthOfYear: 1998,
        hobby: 'Dancing',
        single: false
    }
    ,
    {
        name: 'Bataa',
        birthOfYear: 2010,
        hobby: 'Sport',
        single: true
    }
]

// Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх.
findOlderStudents(students)

// Сурагчийн насыг бодож олох function бичэх.
findAge(students)

// Сурагчидын ганц бие хүмүүсийг буцаах function бичэх.
findSingle(students)




