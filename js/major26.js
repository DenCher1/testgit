var car = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300
};

if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый Мерседес!');
} else {
    alert('Это' + ' ' + car.name + ' ' + car.model);
}

var CurrentYear = new Date().getFullYear();
var years = CurrentYear - car.year;

if (car.year === CurrentYear) {
    alert('Новый автомобиль');
} else if (years <= 2) {
    alert('Свежий автомобиль');
} else {
    alert('Этому автомобилю лет: ' + years)
}

var consumption = car.engine >= 3 ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
alert(consumption);

var russianColor;
    switch (car.color) {
        case "black":
            russianColor = 'Чёрный';
            break;
        case 'silver':
            russianColor = 'Серебристый';
            break;
        case 'red':
            russianColor = 'Красный';
            break;
        case 'white':
            russianColor = 'Белый';
            break;
        case 'gray':
            russianColor = 'Серый';
            break;
        case 'blue':
            russianColor = 'Синий';
            break;
        default:
            russianColor = 'Невозможно определить цвет автомобиля';
    }
    alert(russianColor);
