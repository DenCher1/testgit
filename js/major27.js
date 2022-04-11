var Iphone = {
    name: "Iphone",
    model: '12',
    color: "silver",
    year: 2020,
    price: 900,
};

var Samsung = {
    name: "Samsung",
    model: "Galaxy S13",
    color: "black",
    year: 2021,
    price: 1300,
};

var nokia = {
    name: "Xiaomi ",
    model: "Soft X",
    color: "white",
    year: 2020,
    price: 200,
};

function showModel(object) {
    alert(object.name + ' ' + object.model + ' ' + object.year);
}

showModel(Iphone);
showModel(Samsung);
showModel(nokia);

var russianColor;

function getColor(object) {
    if (object.color) {
        switch (object.color) {
            case "black":
                russianColor = "Черный";
                break;
            case "silver":
                russianColor = "Cеребристый";
                break;
            case "white":
                russianColor = "Белый";
                break;
        }
    }
    return russianColor;
}

alert(getColor(Iphone));
alert(getColor(Samsung));
alert(getColor(nokia));


function canBuy(object, cost) {
    if (cost > object.price) {
        alert(object.name + object.model + ' ' + "Вы можете приобрести этот телефон!");
    } else {
        alert(object.name + object.model + ' ' + "У вас недостаточно денег");
    }
}

canBuy(Iphone, 3000);
canBuy(Iphone, 500);
canBuy(Samsung, 750);
canBuy(nokia, 800);
canBuy(nokia, 120);

function showInfo(object) {
    var newColor = getColor(object);
    alert(object.name + ' ' + object.model + ' ' + newColor)
}

showInfo(Iphone);
showInfo(Samsung);
showInfo(nokia);
