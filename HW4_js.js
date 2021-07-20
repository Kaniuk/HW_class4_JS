// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)


function getRandomArray(size) {
    const resultArray = [];
    for (let i = 0; i < 100; i++) {
        resultArray.push(Math.round(Math.random() * 100));

    }
    console.log('resultArray', resultArray);
    return resultArray;

}

getRandomArray();

function getRandomArray(size) {
    const resultArray = [];
    for (let i = 0; i < size; i++) {
        resultArray.push(Math.round(Math.random() * 100));

    }
    console.log('resultArray', resultArray);
    return resultArray;

}

getRandomArray(25);


let numbers = [77, 43, 23, 30, 57, 59, 49, 33, 64, 17, 52, 60, 78, 1, 36, 64, 46, 85, 93, 83, 32, 99, 98, 10, 24];
let sort = numbers.sort(function (current, next) {
    return current - next;

});
console.log(sort);

let filter = numbers.filter(function (value) {
    return value % 2 === 0;
});
console.log(filter);

let numbersStr = numbers.map(function (number) {
    return '' + number
})
console.log(numbersStr);

function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = `${name.toLowerCase()}.${surname.toLowerCase()}@gmail.com`;
    this.phone = phone;
}

let users = [
    new User(1, 'Valera', 'Petrov', '1234567890'),
    new User(9, 'Valera', 'Petrov', '1234567890'),
    new User(2, 'Valera', 'Petrov', '1234567890'),
    new User(4, 'Valera', 'Petrov', '1234567890'),
    new User(5, 'Valera', 'Petrov', '1234567890'),
    new User(3, 'Valera', 'Petrov', '1234567890'),
    new User(6, 'Valera', 'Petrov', '1234567890'),
    new User(7, 'Valera', 'Petrov', '1234567890'),
    new User(8, 'Valera', 'Petrov', '1234567890'),
    new User(10, 'Valera', 'Petrov', '1234567890'),
];

console.log(users);

const evenUsers = users.filter(function (user) {
    return user.id % 2 === 0;
})

console.log(evenUsers);

const sortUser = users.sort(function (user1, user2) {
    return user1.id - user2.id;
})


console.log(sortUser);

/*

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

*/

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, "Lidiia", "Petrenko", "lidiia@net", "+312345678", [12]),
    new Client(2, "Lilia", "Ivanova", "lilia@net", "+312345688", [1, 22, 13]),
    new Client(3, "Vasyl", "Petrenko", "lidiia@net", "+312345678", [5]),
    new Client(4, "Ivan", "Petrenko", "lidiia@net", "+312345678", [58, 45]),
    new Client(5, "Oleg", "Petrenko", "lidiia@net", "+312345678", [987, 5]),
    new Client(6, "Igor", "Petrenko", "lidiia@net", "+312345678", [124]),
    new Client(7, "Tetyana", "Petrenko", "lidiia@net", "+312345678", [45, 2, 88, 45]),
    new Client(8, "Inna", "Petrenko", "lidiia@net", "+312345678", [1]),
    new Client(9, "Oksana", "Petrenko", "lidiia@net", "+312345678", [987, 47, 4]),
    new Client(10, "Andrew", "Petrenko", "lidiia@net", "+312345678", [98]),
];

let sortedByOrders = clients.sort(function (client1, client2) {
    return client2.order.length - client1.order.length;

});
console.log(sortedByOrders);

/*
function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

    }
    this.info = function () {
        console.log(`Модель - "${this.model}",
Виробник - "${this.producer}",
Рік випуску - "${this.year}" ,
Максимальна швидкість - "${this.maxSpeed}",
Об'єм двигуна - "${this.engineCapacity}"`);

        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    }
    this.increaseMaxSpeed = function (speed) {
        this.maxSpeed = this.maxSpeed + speed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }


}

const myCar = new Car('BMW', 'Germany', 1989, 300, 3.5);
myCar.info();

console.log('----- increase Speed');
myCar.increaseMaxSpeed(50);
myCar.info();

console.log('----- change year');
myCar.changeYear(2021);
myCar.info();

console.log('----- add driver');
myCar.addDriver({id: 5, name: 'Ivan'});
myCar.info();
*/


class Car {

    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    info() {
        console.log(`Модель - "${this.model}",
Виробник - "${this.producer}",
Рік випуску - "${this.year}" ,
Максимальна швидкість - "${this.maxSpeed}",
Об'єм двигуна - "${this.engineCapacity}"`);

        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    }

    increaseMaxSpeed(speed) {
        this.maxSpeed = this.maxSpeed + speed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver
    }

}


const myCar = new Car('BMW', 'Germany', 2014, 300, 3.0);
myCar.info();

console.log('----- increase Speed');
myCar.increaseMaxSpeed(50);
myCar.info();

console.log('----- change year');
myCar.changeYear(2021);
myCar.info();

console.log('----- add driver');
myCar.addDriver({id: 5, name: 'Ivan'});
myCar.info();


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Hero {
    constructor(name, years) {
        this.name = name;
        this.years = years;
    }
}

class Cinderella extends Hero {
    constructor(name, years, size) {
        super(name, years);
        this.size = size;
    }
}

let cinderellas = [
    new Cinderella('Cinderella', 21, 36),
    new Cinderella('Cinderella', 21, 39),
    new Cinderella('Cinderella', 21, 42),
    new Cinderella('Cinderella', 21, 35),
    new Cinderella('Cinderella', 21, 38),
    new Cinderella('Cinderella', 21, 36),
    new Cinderella('Cinderella', 21, 39),
    new Cinderella('Cinderella', 21, 40),
    new Cinderella('Cinderella', 21, 37),
    new Cinderella('Cinderella', 21, 39),
];


class Prince extends Hero {
    constructor(name, years, foundBootSize) {
        super(name, years);
        this.faundBootSize = foundBootSize;
    }
}

let prince = new Prince('John', 25, 35);

for (const cinderella of cinderellas) {
    if (cinderella.size === prince.size)
        console.log('This is real Cinderella', cinderella)
}

let findCinderella = cinderellas.find(function (cinderella) {
    return prince.faundBootSize === cinderella.size;
})
console.log('findCinderella', findCinderella);