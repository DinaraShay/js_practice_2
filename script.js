// Задача 1

// let arr = [
//     { name: "Игрушка", price: 1000, category: "Детские товары" },
//     { name: "Мыло", price: 100, category: "Гигиена" },
//     { name: "Масло", price: 200, category: "Продукты" }
// ];

// function getTotalPriceByCategory(category) {
//     let filtered = arr.filter(function(item) {
//     return item.category === category;
// });

// let sum = filtered.reduce(function(acc, item) {
//     return acc + item.price;
//     }, 0)
//     return sum
// }
 

// Задача 2
// let users = [
//     {id: 1, name: "Diana",  email: "diana@yandex.ru"},
//     {id: 2, name: "Denis",  email: "denis@yandex.ru"},
//     {id: 3, name: "Maria",  email: "maria@yandex.ru"},
// ]

// function findUserById(users, id) {
//     let result = users.find(function (user) {
//         return user.id === id
//     })
//     if (result === undefined) {
//         return null;
//     }
//     return result
// }
// console.log(findUserById(users, 2));
// console.log(findUserById(users, 5));

// Задача 3

// const books = [
//     {
//         title: "Мастер и Маргарита",
//         author: "Михаил Булгаков",
//         genres: ["роман", "мистика", "философский"],
//         isRead: true
//     },
//     {
//         title: "Гарри Поттер и философский камень",
//         author: "Джоан Роулинг",
//         genres: ["фэнтези", "приключения"],
//         isRead: false
//     },
//     {
//         title: "451 градус по Фаренгейту",
//         author: "Рэй Брэдбери",
//         genres: ["антиутопия", "научная фантастика"],
//         isRead: true
//     }
// ];

// function getBooksByGenre(genre) {
//     const filtered = books.filter(function(item) {
//         return item.genres.includes(genre)
//     });

//     return filtered
// }

// function markAsRead(title) {
//     const findName = books.find(function(item) {
//         return item.title === title;

//     });

//     if (findName) {
//         return findName.isRead = true;
//         return true
//     }
//     return findName
// }

// getBooksByGenre("фэнтези")

// markAsRead("451 градус по Фаренгейту")


// Задача 4

const categories = {
  name: "Electronics",
  subcategories: [
    {
      name: "Phones",
      subcategories: [
        { name: "Smartphones", subcategories: [] },
        { name: "Feature Phones", subcategories: [] }
      ]
    },
    {
      name: "Computers",
      subcategories: [
        { name: "Laptops", subcategories: [] },
        { name: "Desktops", subcategories: [] }
      ]
    }
  ]
}

function findCategory(name, tree) {
    if (tree.name === name) { 
        return tree;
    }
    for (cat of tree.subcategories) {
    let result = findCategory(name, cat);
    if (result !== null) {
        return result
    }

}
    return null
}

// Задача 5

const original = {
  name: "Alice",
  settings: {
    theme: "dark",
    languages: ["en", "ru"]
  }
};


function deepClone(obj) { 
    if (typeof obj !== "object" || obj === null) { 
        return obj;
    }
    if (Array.isArray(obj)) { 
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) { 
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

}

const copy = deepClone(original);

copy.settings.theme = "light";
copy.settings.languages.push("fr");

console.log(original.settings.theme); 
console.log(original.settings.languages);


// Задача 6
let count = 10;

function increase() {
  let count = 0;
  count += 1;
  return count;
}

console.log(increase()); // 1
console.log(count); // 10

// Задача 7
let message = "Hello";

function changeMessage() {
  message = "Hi";
}

changeMessage();
console.log(message); //Hi

// Задача 8

function outer() {
  let outerVar = "I am outside!";
  
  function inner() {
    console.log(outerVar);
  }
  
  return inner;
}

let outerVar = 'Inside';

const func = outer();
func(); // "I am outside!"


// Задача 9
a = 10;

function f() {
    console.log(a);
}

a = 20;

f(); //20