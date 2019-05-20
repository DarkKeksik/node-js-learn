// Путь к файлу
// console.log(__dirname);

// Путь и название самого файла
// console.log(__filename);

// Тестовое подключение модулей
let things = require("./moduls/mod1"),
    eventsMod = require("./moduls/events");
    fileReaded = require("./moduls/readFiles"),
    workWithFolders = require("./moduls/workWithFiles"),
    server = require("./moduls/server");

// Вывод функции из модуля
// console.log("Тестирую переменные из модуля", things);
