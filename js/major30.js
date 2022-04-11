let client = {};
client.name = prompt('ФИО');
client.date = prompt('Дата рождения (формат  мм-дд-гггг)');
client.phone = prompt('Телефон');
client.email = prompt('Электронная почта');
client.country = prompt('Страна');
client.city = prompt('Город');


client.date = new Date(client.date);

var conf = confirm('Применить скидку?');
if (conf == true) {
    client.discount = prompt('Введите сумму скидки:')
}


let showClient = (object) => {
    console.log(object.name);
    console.log(object.date);
    console.log(object.phone);
    console.log(object.email);
    console.log(object.country);
    console.log(object.city);
    if (object.hasOwnProperty('discount')) {
        console.log(object.discount)
    }
}

setTimeout(() => {
    showClient(client);
}, 2000);


try {
    showClient();
} catch (e) {
    console.log('Вызвана функция без параметров')
    console.log(e.message)
}





