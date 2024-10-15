"use strict";

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// const planets = ["Earth", "Mars", "Venus"];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// function getOrderQuantity(order) {
//   const length = order.length;
//   return length;
// }
// console.log(getOrderQuantity([]));

// function getOrderQuantity(order) {
//   const order = ["apple", "peach", "pear", "banana"];
//   console.log(order);
// }
// console.log(getOrderQuantity(order));

// function getLastElementMeta(array) {
//   const lastElement = array.length - 1;
//   const secondElement = array[lastElement];
//   return [lastElement, secondElement];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function getLength(array) {
//   const arrayString = String(array);
//   // console.log(arrayString);
//   const words = arrayString.split(",");
//   console.log(words);
//   const string = words.join("");
//   // console.log(string);

//   const arrayLength = string.length;
//   // console.log(arrayLength);
//   return arrayLength;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   console.log(words);
//   const wordsNumber = words.length;
//   console.log(wordsNumber);
//   return wordsNumber * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function getSlice(array, value) {
//   let index = array.indexOf(value);
//   if (index === -1) {
//     return []
//   } else {
//     return array.slice(0, index + 1)
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));  returns ["Mango", "Poly"].
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax") returns ["Mango", "Poly", "Ajax"].
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango") returns ["Mango"].
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob") returns [].
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey") returns [].

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
