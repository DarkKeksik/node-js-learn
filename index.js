// Путь к файлу
// console.log(__dirname);

// Путь и название самого файла
// console.log(__filename);

// Тестовое подключение модулей
let things = require("./moduls/mod1"),
    eventsMod = require("./moduls/events");
    fileReaded = require("./moduls/readFiles"),
    workWithFolders = require("./moduls/workWithFiles"),
    lotInfo = require("./moduls/divideIntoParts"),
    // server = require("./moduls/server") // Сервер на стандартном Node.js
    serverExpress = require("./moduls/workInExpress.js");

// Вывод функции из модуля
// console.log("Тестирую переменные из модуля", things);
