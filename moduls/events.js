let events = require('events'),
    // Обработчик события
    myEmit = new events.EventEmitter();

// Свое cобытие
myEmit.on("myEvent", (text) => {
  console.log(text);
});

// Принудительно вызвать действие
myEmit.emit("myEvent", "Мое событие сработало");
