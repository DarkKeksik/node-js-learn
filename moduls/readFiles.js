let fs = require("fs");

// Директория под данные
let way = `${__dirname}/source/`;

// Синхронное чтение файла (подобный путь, так как файл берется относит. index)
// let fileReaded = fs.readFileSync(`${way}testInfo.txt`, 'utf8');
// console.log(`Проверить файл: ${fileReaded}`);

// Асинхронная чтение/запись/удаление файла с каллбэком
fs.readFile(`${way}testInfo.txt`, "utf8", (err, data) => {
    console.log(`Файл был прочитан, результат: ${data}`);
});
