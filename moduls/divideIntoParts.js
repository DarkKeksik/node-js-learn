let fs = require("fs");

// Подгружаем информацию по мере загрузки
let moreInform = fs.createReadStream(`${__dirname}/source/lotInfo.txt`),
    writeInform = fs.createWriteStream(`${__dirname}/source/lotInfoNew.txt`);


// Событие дата срабатывает, когда подгружается часть информации
moreInform.on("data", (chunk) => {
    // console.log(`###################\n\n\n ${chunk}`);
    writeInform.write(chunk);
});
