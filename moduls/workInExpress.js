let express = require("express"),
    app = express(), // Импортировать функции в эту переменную
    bodyParser = require("body-parser"), // Парсим форму
    urlBodyParser = bodyParser.urlencoded( {extended: false} );

// Указываем какой движок используем для шаблонизации
app.set("view engine", "ejs");

// Указываем путь до статических файлов
app.use("/source", express.static("./moduls/source"));

// Главная страница
app.get("/", (req, res) => {
  // Послать ответ
  // res.sendFile(`${__dirname}/views/testIndex.html`);
  res.render(`${__dirname}/views/index`);
});

// Новости
app.get("/news", (req, res) => {
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

// О нас
app.get("/about", (req, res) => {
  res.render(`${__dirname}/views/about`);
});

app.post("/about", urlBodyParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render(`${__dirname}/views/formSuccess`, {data: req.body});
});

app.listen(3000, "localhost");
