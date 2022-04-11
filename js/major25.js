var person1 = {
    name: 'Alex',
    age: 20,
    married:true,
    children:3
};

var person2 = {
    name: 'Sonya',
    age: 25,
    married:false,
    children:0
};

var person3 = {
    name: 'Sam',
    age: 35,
    married:true,
    children:1
};

var names = person1.name + " , " + person2.name + " , " + person3.name;
alert(names);

var averageAge = (person1.age + person2.age + person3.age) / 3;
alert(averageAge);

var atLeastOneMarried = person1.married || person2.married || person3.married;
alert('Хотя бы один работник женат/замужем?' + atLeastOneMarried);

var allYoungerThanForty = person1.age < 40 && person2.age < 40 && person3.age < 40;
alert('Все моложе 40 лет?' + allYoungerThanForty);

var atLeastOneHasNoChildren = !person1.children || !person2.children || !person3.children;
alert('“Хоть кто то не имеет детей?' + atLeastOneHasNoChildren);

