// Путь к файлу
console.log(__dirname);

// Путь и название самого файла
console.log(__filename);

// Тестовое подключение модулей
let deg = require("./moduls/mod1");
//require ("./moduls/mod2");

// Вывод функции из модуля
console.log("Тестирую переменные из модуля", deg);
console.log(deg(2));
