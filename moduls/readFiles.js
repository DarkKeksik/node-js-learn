let fs = require("fs");

// Синхронное чтение файла (подобный путь, так как файл берется относит. index)
let way = "./moduls/source/";
let fileReaded = fs.readFileSync(`${way}testInfo.txt`, 'utf8');
// console.log(`Проверить файл: ${fileReaded}`);

// Синхронное создание файла (так же возможность записи в файл)
let infoForNewFile = `${fileReaded}\n Да, здравствует новый файл`;
fs.writeFileSync(`${way}testInfoNew.txt`, infoForNewFile);
