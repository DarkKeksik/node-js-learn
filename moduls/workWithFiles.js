let fs = require("fs");
let way = `${__dirname}/source/txt`;

// Синхронное создание файла (так же возможность записи в файл)
// let infoForNewFile = `${fileReaded}\n Да, здравствует новый файл`;
// fs.writeFileSync(`${way}testInfoNew.txt`, infoForNewFile);
fs.writeFile(`${way}testInfoNew.txt`, "Hi asych write", (err, data) => {
    console.log("Файл был создан/записан");
});
fs.unlink(`${way}testInfoNew.txt`, () => {
  console.log("Файл успешно удален");
});

// Создание директории и файла внутри
fs.mkdir("newFolder", () => {
  fs.writeFile(`./newFolder/newText.txt`, "Новый файл с важной информацией", () => {
    console.log("Создание файла в папке newFolder, завершено");

    // Удаление файла и папки
    fs.unlink(`newFolder/newText.txt`, () => {
      fs.rmdir("newFolder", () => {
        console.log("Папка newFolder удаленна");
      })
    });
  });
});
