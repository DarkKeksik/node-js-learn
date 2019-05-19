let events = require('events'),
    // Обработчик события
    myEmit = new events.EventEmitter();

// Свое cобытие
myEmit.on("myEvent", (text) => {
  console.log(text);
});

// Принудительно вызвать действие
myEmit.emit("myEvent", "Мое событие сработало");

// Разбираю модуль унаследования события для всех объектов
let util = require("util");

let Cars = function(model) {
    this.model = model;
}

// Для всех объектов созданных через "Cars" будет использоваться данное событие
util.inherits(Cars, events.EventEmitter);

let bmw = new Cars("BMW"),
    audi = new Cars("Audi"),
    volvo = new Cars("Volvo");

let cars = [bmw, audi, volvo];
cars.forEach((car) => {
    car.on('speed', (text) => {
        console.log(`${car.model} speed is - ${text}`);
    });
});

// Событие доступно для всех последующих обьектов конструктора Cars
bmw.emit("speed", "256.2 km");
audi.emit("speed", "230.2 km");
volvo.emit("speed", "180.2 km");
