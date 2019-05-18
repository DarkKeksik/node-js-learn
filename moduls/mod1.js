// require выводит console.log без exports

// 1 способ
let testFunction1  = (number) => {
  return number ** 2;
}
let testFunction2 = (number) => {
  return number % 2;
}

// Множественный вывод
// 1 способ
module.exports.testFunction1 = testFunction1;
module.exports.testFunction2 = testFunction2;

// 2 способ
module.exports.testFunction3  = (number) => { return number * 2; }
module.exports.testFunction4 = (number) => { return number / 2; }

// 3 способ
let testFunction5 = (number) => { return number + 2 }
let testFunction6 = (number) => { return number - 2 }
module.exports = {
    testFunction5: testFunction5,
    testFunction6: testFunction6
}
