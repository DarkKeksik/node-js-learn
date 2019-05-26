let express = require("express"),
    app = express(); // Импортировать функции в эту переменную

// Указываем какой движок используем для шаблонизации
app.set("view engine", "ejs");

// Указываем путь до статических файлов
app.use("/source", express.static("./moduls/source"));

// Главная страница
app.get("/", (req, res) => {
  // Послать ответ
  // res.sendFile(`${__dirname}/views/testIndex.html`);
  res.render(`${__dirname}/views/index`);
  console.log("awdawdawd"+__filename);
});

// Новости
app.get("/news/:id", (req, res) => {
  // res.send(`It's news ${req.params.ids}`); // Динам. ответ по переменной id
  let obj = {
    "first": "123",
    "second": "234",
    "third": ["boy", "girl", "man", "women"]
  }

  // Добавляем параметры для шаблонизатора
  res.render(`${__dirname}/views/news`,
    {newsId: req.params.id, testParam: 123, obj: obj}
  );
});

app.listen(3000, "192.168.1.103");
