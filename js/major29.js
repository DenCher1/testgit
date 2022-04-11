var students = [
    student1 = {
        firstName: 'Александр',
        lastName: 'Иванчук',
        group: 'T993',
        marks: [2, 4, 4, 5, 2, 3, 3, 4, 5, 3, 2, 4, 3]
    },
    student2 = {
        firstName: 'Анатолий',
        lastName: 'Косанов',
        group: 'T993',
        marks: [3, 4, 5, 4, 4, 1, 4, 3, 4, 4, 4, 3, 5]
    },
    student3 = {
        firstName: 'Руслан',
        lastName: 'Столбов',
        group: 'T993',
        marks: [3, 3, 5, 4, 4, 1, 4, 4, 3, 5, 4, 4, 4]
    },
    student4 = {
        firstName: 'Иван',
        lastName: 'Пробкин',
        group: 'T994',
        marks: [2, 3, 2, 1, 2, 3, 2, 3, 3, 3, 4, 1, 1]
    },
    student5 = {
        firstName: 'Владислав',
        lastName: 'Голубев',
        group: 'T994',
        marks: [1, 2, 2, 2, 3, 2, 2, 3, 5, 1, 2, 3, 2]
    }
]

var studentsName;

function fullName(object) {
    studentsName = object.firstName + ' ' + object.lastName;
    return studentsName;
}

console.log(fullName(students[0]))


function getAverageMark(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    var result = sum / marks.length;
    return result;
}
console.log(getAverageMark(students[0].marks).toFixed(2))

students.forEach(function (object) {
    console.log('Студент' + ' ' + fullName(object) + ' ' + 'имеет средний бал' + ' ' + getAverageMark(object.marks).toFixed(0) + ' ' + 'учиться в группе' + ' ' + object.group)
})

