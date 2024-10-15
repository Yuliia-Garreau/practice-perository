"use strict";

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(5));

// function calculate(number) {
//   let i = 0;
//   for (let i = 0; i <= number; i++) {}
//   return i;
// }
// console.log(calculate(10));

// function printNumbers() {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
//   return;
// }

// printNumbers();

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   const order = [];
//   //   console.log(order[(12, 13)]);
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(i);
//     // order += i;
//     // return order;
//   }
// }
// console.log(calculateTotalPrice([10, 20]));

// const la = "Hello";
// for (let i = 0; i < la.length; i++) {
//   console.log(la([i], i));
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(`${i}`);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(7, 7));

// const tags = [];
// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// function checkStorage(storage, item) {
//   const itemLower = item.toLowerCase();
//   if (storage.includes(itemLower)) {
//     return `${itemLower} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "orange"));

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     // console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// const array1 = [1, 10, 3, 75, 5];

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// function sum(a, b, n) {
//   console.log(arguments);
//   return a + b + n;
// }

// sum(2, 5, 10);

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   console.log(args);

//   return args.join("-");
// }
// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

// function createReversedArray() {
//   const args = Array.from(arguments);
//   console.log(args);
//   const reversedArray = args.toReversed();
//   return reversedArray;
// }
// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray());

// function count(from, to, step = 3) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }
// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200));

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }
// multiply(1, 2, 3);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // const keys = ["descr", "rating", "price"];
// // const values = ["Spacious apartment in the city center", 4, 2153];
// for (const key in apartment) {
//   console.log(key);
//   // console.log(values);
//   console.log(apartment[key]);
//   console.log();
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(Object.keys(book));
// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = ["Spacious apartment in the city center", 4, 2153];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
// }

// function countProps(object) {
//    const keys = Object.keys(object);
//   const propCount = keys.length;
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   console.log(values);
//   for (let value of values) {
//     totalSalary += value;
//   }
//   console.log(typeof totalSalary);
//   console.log(typeof Number(values));
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products)
//     if (productName === product.name) {
//       return product.price;
//     }
// }
// console.log(getProductPrice("Grip"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let propValues = [];
//   for (const product of products) {
//     if (propName in product) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("gdty"));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion("Power potion"));

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };
// bookShelf.getBooks();

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (value < args[i]) {
//       total += args[i];
//     }
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function getExtremeScores(scores) {
//   return `{
//   best: ${Math.max(...scores)},
//   worst: ${Math.min(...scores)},
//   }`;
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// console.log(getExtremeScores);

// function greet(name) {
//   return `Welcome ${name}!`;
// }
// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"
// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(makePizza());
// console.log(makePizza);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"
// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   let newArr = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newArr.push(`${number}`);
//       // console.log(`${number}`);
//     }
//   });
//   return newArr;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((orderedItem) => {
//     totalPrice += orderedItem;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function changeEven(numbers, value) {
//   let updatedArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       updatedArray.push(numbers[i] + value);
//     } else {
//       updatedArray.push(numbers[i]);
//     }
//   }
//   return updatedArray;
// }
// console.log(numbers);
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach((element) => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const emails = getUserEmails(users);
// console.log(emails);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => {
//   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// console.log(calculateTotalBalance());

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log(names);
