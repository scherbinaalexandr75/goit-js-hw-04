// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// let keys = [];
// let values = [];

// for (const key in book) {
//     keys = key;
//     values = book[key];
//   console.log(keys);
//   console.log(values);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// let keys = [];
// let values = [];
// let i = 0;
// for (const key in apartment) {
//   keys[i] = key;
//   values[i] = apartment[key];
//   i++;
// }

// console.log(keys);
// console.log(values);

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1));

// function createReversedArray() {
//   const arr = Array.from(arguments);
//   // arr.toReversed(arguments);
//   return arr.toReversed(arguments);
// }

// console.log(createReversedArray(12, 85, 37, 4));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = apartment;

// console.log(apartment);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// let values = [];
// let keys = Object.keys(apartment);
// let a = 0;

// for (const key of keys) {
//   // keys = key;
//   values[a] = apartment[key];
//   a++;
// }

// console.log(values);
// console.log(keys);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);

//   for (const key of keys) {

//       propCount +=1;

//   }

//   // console.log(keys);
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   let keys = Object.keys(salaries);
//   let values = Object.values(salaries);
//   for (const key of values){
//     totalSalary += key;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const searchProduct = productName;

//   for (const product of products) {
//     if (product.name === searchProduct) {
//       return product.price;
//     }
//   }
// }
// console.log(getProductPrice("Grip"));

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const names = [];
//   const key = Object.keys(products);
//   console.log(products.name);
//   for (const value of products) {
//     names.push(value.name);
//   }
//   return names;
// }

// console.log(getAllPropValues("names"));

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions);

// function add(...args) {
//   let summ = 0;

//   for (const item of args) {
//     summ += item;
//   }

//   return summ;
// }
// console.log(add(32, 6, 13, 19, 8));

// console.log(...[1, 2, 3]);

// function getExtremeScores(scores) {
//   const score = { best: Math.max(...scores), worst: Math.min(...scores) };
//   return score;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// let allScores = [];
// let bestScore = allScores;
// let worstScore = allScores;

// allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// bestScore = Math.max(...allScores);
// worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const objA = {
//   x: 1,
//   y: 2,
// };

// const objB = {
//   y: 3,
// };

// const result = {
//   x: 5,
//   ...objA,
//   y: 10,
//   ...objB,
//   z: 15,
// };

// console.log(result);

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let i = 0;
//   let returnValue = [];
//   let key = Object.keys(products[0]);
//   let keys = Object.keys(products);
//   for (const value of key) {
//     if (propName === value) {
//       for (const product of products) {
//         returnValue[i] = product[value];
//         i++;
//       }
//      }
//   }
//   return returnValue;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//  const searchProduct = productName;

//   for (const product of products) {
//     if (product.name === searchProduct) {
//       return product.price * product.quantity;
//     }
//   }
//    return `Product ${productName} not found!`;
// }

//   console.log(calculateTotalPrice("Rada"));

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings, ...overrideSettings
// };

// console.log(finalSettings);
