let http = require("http"),
    server = http.createServer( (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
      res.end('Привет мирок');

      // Логирование
      console.log(`URL страницы: ${req.url}`);
    });

server.listen(3000, "127.0.0.1");
console.log("Начинаем отслеживать порт 3000");
