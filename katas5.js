// implemente aqui as funções de teste
function testeReverseString1() {
  let result = reverseString("Kenzie Academy");
  let expected = "ymedacA eizneK";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testeReverseString2() {
  let result = reverseString("Nicolly Kasuga");
  let expected = "agusaK yllociN";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido ${result}`
  );
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

// kata 2

function testReverseSentence1() {
  let result = reverseSentence("bob likes dogs");
  let expected = "dogs likes bob";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testReverseSentence2() {
  let result = reverseSentence("mamao de gosto");
  let expected = "gosto de mamao";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

//katas 3

function testMinimumValue1() {
  let result = minimumValue([1, 2, 3, 4, 5]);
  let expected = 1;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testMinimumValue2() {
  let result = minimumValue([587, 873, 155, 165]);
  let expected = 155;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function minimumValue(array) {
  array = array.sort((a, b) => a - b);
  let num = array[0];
  return num;
}

//kata 4

function testMaximumValue1() {
  let result = maximumValue([1, 2, 3, 4, 5]);
  let expected = 5;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testMaximumValue2() {
  let result = maximumValue([587, 873, 155, 165]);
  let expected = 873;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function maximumValue(array) {
  array = array.sort((a, b) => b - a);
  let num = array[0];
  return num;
}

// kata 05

function testCalculateRemainder1() {
  let result = calculateRemainder(10, 2);
  let expected = 5;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testCalculateRemainder2() {
  let result = calculateRemainder(100, 4);
  let expected = 25;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function calculateRemainder(num1, num2) {
  return num1 % num2;
}

//kata 06

function testDistinctValues1() {
  let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
  let expected = [1, 3, 5, 7];
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testDistinctValues2() {
  let result = distinctValues([2, 7, 5, 9, 7, 1, 7, 5, 1]);
  let expected = [2, 7, 5, 9, 1];
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function distinctValues(array) {
  let num = [];
  for (let i = 0; i < array.length; i++)
    if (!num.includes(array[i])) {
      num.push(array[i]);
    }
  return num;
}

//kata 07

function testCountValues1() {
  let result = countValues("1, 3, 5, 3, 7, 3, 1, 1, 5");
  let expected = "1(3) 3(3) 5(2) 7(1)";
  console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`);
}

function testCountValues2() {
  let result = countValues("2,7,5,9,7,1,7,5,1");
  let expected = "2(1) 7(3) 5(2) 9(1) 1(1)";
  console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`);
}

function countValues(numbers) {
  let array = distinctValues(numbers).split(" ");
  let result = "";
  let contador = 0;
  array.forEach((element) => {
    for (let i = 0; i < numbers.length; i++) {
      if (element === numbers[i]) {
        contador++;
      }
    }
    result += `${element} (${contador})`;
    contador = 0;
  });
  return result;
}

//kata 08

function testEvaluateExpression1() {
  let result = evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 });
  let expected = -3;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testEvaluateExpression2() {
  let result = evaluateExpression("q - w - e + r", {
    q: 10,
    w: 3,
    e: 5,
    r: 15,
  });
  let expected = 17;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function evaluateExpression(string, object) {}
