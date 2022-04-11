var students = [
    student1 = {
        name: 'Алексей Попов',
        class: 7,
        marks: [2, 4, 3, 4, 2, 3, 3, 5, 4, 1]
    },
    student2 = {
        name: 'Иван Петросян',
        class: 6,
        marks: [3, 2, 4, 4, 3, 5, 5, 5]
    },
    student3 = {
        name: 'Василий Караванов',
        class: 8,
        marks: [1, 2, 2, 1, 4, 3, 3, 2]
    }
]

console.log(student1);
console.log(student2);
console.log(student3);

students.push({name: 'Виталий Абрамов', class: 7, marks: [3, 3, 2, 3, 4, 3]});
console.log(students);

students[2].marks.push(5);
console.log(students[2].marks);

students[0].marks.pop();
console.log(students[0].marks);

console.log('У Василия ' + students[2].marks.length + ' оценок');

console.log(students[1].name.toUpperCase() + ' сейчас в ' + students[1].class + ' классе');



