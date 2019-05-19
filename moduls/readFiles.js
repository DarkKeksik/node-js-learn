let fs = require("fs");

// Синхронное чтение файла (подобный путь, так как файл берется относит. index)
let way = `${__dirname}/source/`;
// let fileReaded = fs.readFileSync(`${way}testInfo.txt`, 'utf8');
// console.log(`Проверить файл: ${fileReaded}`);

// Синхронное создание файла (так же возможность записи в файл)
// let infoForNewFile = `${fileReaded}\n Да, здравствует новый файл`;
// fs.writeFileSync(`${way}testInfoNew.txt`, infoForNewFile);

// Асинхронная чтение/запись файла с каллбэком
fs.readFile(`${way}testInfo.txt`, "utf8", (err, data) => {
    console.log(`Файл был прочитан, результат: ${data}`);
});
fs.writeFile(`${way}testInfoNew.txt`, "Hi asych write", (err, data) => {
    console.log("Файл был создан/записан");
});
