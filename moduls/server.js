let http = require("http"),
    fs = require("fs"),
    server = http.createServer( (req, res) => {
      if (req.url === "/index" || req.url === "/") {
          res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
          // let readFile = fs.createReadStream(`${__dirname}/source/testIndex.html`);
          // readFile.on("data", (chank) => {
          //     res.end(chank);
          // });
          fs.createReadStream(`${__dirname}/source/testIndex.html`).pipe(res);
      } else {
          res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
          fs.createReadStream(`${__dirname}/source/404.html`).pipe(res);
      }

      // Логирование
      console.log(`URL страницы: ${req.url}`);
    });

server.listen(3000, "192.168.1.103");
console.log("Начинаем слушать порт 3000");
