let http = require("http"),
    server = http.createServer( (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
      res.end('Привет мирок');

      // Логирование
      console.log(`URL страницы: ${req.url}`);
    });

server.listen(3000, "192.168.1.103");
console.log("Начинаем слушать порт 3000");
