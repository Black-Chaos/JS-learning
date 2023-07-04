// const count = 8;
// for (let i = 1; i <= count; i++) {
//     let chessboard = '';
//     for (let k = 1; k <= count; k++) {
//         if (i % 2) {
//             if (k % 2) {
//                 chessboard += '#';
//             } else {
//                 chessboard += ' ';
//             }
//         } else {
//             if (k % 2) {
//                 chessboard += ' ';
//             } else {
//                 chessboard += '#'
//             }
//         }
//     }
//     console.log(chessboard);
// }

// =============================

// function fizzBuzz (end, start=3) {
//     for (let i = start; i <= end; i++) {
//         let result = '';
//         if (i % 3 === 0) {
//             result += 'Fizz'
//         }
//         if (i % 5 === 0) {
//             result += 'Buzz'
//         }
//         if (result) {
//             console.log(i, result);
//         }
//     }
// }
// fizzBuzz(50)

// =========================

// function min(x, y) {
//     return Math.min(x, y)
// }
// console.log(min(0, 10));
// console.log(min(0, -10));

// =========================

// function isEven(x) {
//     return !(x % 2)
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// ========================

// let text = 'qewrqwer';

// function laterInString(str, l) {
//     let total = 0;
//     if (str.includes(l)) {
//         for (const ltr of str) {
//             if (ltr === l) total++;
//         }
//     }
//     return total
// }
// console.log(laterInString(text, 'e'));

// ======================================

// function addBinary(a = 0, b = 0) {
//     let binary = '';
//     let decimal = a + b;
//     while (decimal > 0) {
//         binary = decimal % 2 + binary;
//         decimal = Math.floor(decimal / 2)
//     }
//     return binary
// }
// console.log(addBinary(49));

// -------------------------------

// function addBinary(a = 0, b = 0) {
//     return (a + b).toString(2)
// }
// console.log(addBinary(49));

// ===========================

// const str = 'hgI hnG yhHi';
// let letters = '';
// for (const letter of str) {
//     letters += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(letters);

// ==========================

// function angle(x) {
//     let top = '';
//     let bottom = '';
//     for (let i = 1; i <= x; i++) {
//         for (let j = 0; j < i; j++) {
//             if (i === x) {
//                 top += '#';
//                 if (j === i - 1) return top + bottom;
//                 continue
//             }
//             top += '#';
//             bottom = '#' + bottom;
//         }
//         top += '\n';
//         bottom = '\n' + bottom;
//     }
// }
// console.log(angle(8));

// ===========================

// const cart = {
//     items: [],
//     getItems() {
//         console.log(this.items);
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 return item.quantity += 1;
//             }
//         }
//         const addProduct = {
//             ...product,
//             quantity: 1,
//         }
//         this.items.push(addProduct);
//     },
//     remove(productName, i = 0) {
//         const {items} = this
//         for (; i < items.length; i++) {
//             const { name } = items[i];
//             if (name === productName) {
//                 return items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         let total = 0;
//         for (const {price, quantity} of this.items) {
//             total += price * quantity;
//         }
//         console.log(total);
//     },
//     increaseQuantity(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 return (item.quantity += 1);
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         const { items } = this;
//         for (let i = 0; i < items.length; i++) {
//             const item = items[i];
//             if (item.name === productName) {
//                 if (item.quantity > 1) {
//                     return (item.quantity -= 1);
//                 }
//                 return this.remove(productName, i);
//             }
//         }
//     },
// };

// const redApple = { name: '🍎', price: 60 };
// const mango = { name: '🥭', price: 70 };
// const strawberry = { name: '🍓', price: 75 };
// const greenApple = { name: '🍏', price: 50 };
// const kiwi = { name: '🥝', price: 80 };
// const banana = { name: '🍌', price: 100 };

// cart.add(redApple);
// cart.add(redApple);
// cart.add(mango);
// cart.add(strawberry);
// cart.add(greenApple);
// cart.add(kiwi);
// cart.add(banana);

// cart.remove('🍏');

// cart.clear();

// cart.increaseQuantity('🍓');

// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🥭');

// cart.getItems();
// cart.countTotalPrice();

// console.log(redApple);
// console.log(mango);
// console.log(strawberry);
// console.log(greenApple);
// console.log(kiwi);
// console.log(banana);

// ===============================

// const students = [
//     { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//     { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//     { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//     { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
//     { name: 'Lime', score: 94, courses: ['физика', 'информатика'] },
// ];
// const uniqueSortedCourses = students
//     .flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));

// const uniqueSortedCourses = arr => new Set(arr.reduce((allCourses, student) => [...allCourses, ...student.courses], []).sort((a, b) => a.localeCompare(b)));

// console.log(uniqueSortedCourses(students)); // ['биология', 'информатика', 'литература', 'математика', 'физика']

// ------------------------------------------

// const allCourses = arr => arr.flatMap(el => el.courses);
// const uniqueCourses = arr => allCourses(arr).filter((el, i, arr) => arr.indexOf(el) === i);
// const sortedCourses = arr => allCourses(arr).sort((a, b) => a.localeCompare(b));
// const coursesStats = arr => allCourses(arr).reduce((acc, item) => ({
//         ...acc, // распыление каждый раз чтобы линтеры не ругались на изменение значения параметра
//         [item]: acc[item] ? acc[item] + 1 :  1,
//     }), {})
// console.log(allCourses(students));
// console.log(uniqueCourses(sortedCourses(allCourses(students))));
// console.log(coursesStats(allCourses(students)));
// console.log(coursesStats(students));

// ========================================

// const cart = [
//     { label: 'apples', price: 50, quantity: 2 },
//     { label: 'bananas', price: 40, quantity: 3 },
//     { label: 'orange', price: 70, quantity: 1 },
//     { label: 'pineapples', price: 110, quantity: 3 },
// ];

// const totalAmount = cart =>
//     cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
// console.log(totalAmount(cart));

// =======================================

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // соберем в массив все теги, которые встречаются в постах
// // const allTags = arr => arr.reduce((acc, el) => acc = [...acc, ...el.tags], []);
// const allTags = arr => arr.flatMap(el => el.tags);
// // console.log(allTags(tweets));

// // посчитать количество уникальных тегов в массиве
// const tagStats = arr =>
//     arr.reduce((acc, el) => {
//         return {
//             ...acc, // распыляем масив чтобы не изменять его, а возвращать новый
//             [el]: acc[el] ? (acc[el] += 1) : 1, // проверяем если такой ключ есть то увеличиваем значение, если нет - присваиваем новое
//         };
//     }, {});
// console.log(tagStats(allTags(tweets)));

// ======================================

// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//     #login;
//     #email;
//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {return this.#login}
//     set login(newLogin) { this.#login = newLogin }

//     get email() { return this.#email }
//     set email(newEmail) {this.#email = newEmail}
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// -------------------------------------

// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger extends User {
//     constructor({ login, email, age, numberOfPosts, topics }) {
//         super({ login, email });
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value
//     }
// }

// const mango = new Blogger({
//     login: 'Mango',
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//     login: 'Poly',
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ---------------------------------------

// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
//     removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {return this.items}
//     addItem(item) { this.items.push(item) }
//     removeItem(item) {
//         const getIndex = this.items.includes(item);
//         if (getIndex !== -1) {
//             this.items.splice(getIndex, 1)
//         }
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// ------------------------------------------

// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     };

//     constructor(items) {
//         this.items = items;
//     }
//     addNote({ text, priority }) {
//         this.items.push({
//             text,
//             priority: Notes.Priority[priority],
//         })
//     }
//     removeNote(note) {
//         const getIndex = this.items.findIndex(item => item.text === note);
//         if (getIndex !== -1) {
//             this.items.splice(getIndex, 1)
//         }
//     }
//     updateNote(note, priority) {
//         this.items.forEach(el => {
//             if (el.text === note) {
//                 el.priority = Notes.Priority[priority];
//             }
//         });
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: 'LOW' });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: 'NORMAL',
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', 'HIGH');
// console.log(myNotes.items);

// class Toggle {
//     constructor(settings) {
//         this.on = settings?.isOpen || false;
//     }
//     toggle() {this.on = !this.on}
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// ==================================

// Реалізувати пошук товарів по частковій або повній назві.
// Зробити так, щоб частота виконання функції обробника події була 500ms.
// При рендері списку знайдених товарів додати кнопку "Додати у кошик",
// при натисканні на яку товари будуть рендеритись в <ul id="cartItemsContainer"></ul>
// Реалізувати можливість видалення цих товарів з кошика.

// <div class="container">
//     <input type="text" id="searchInput" placeholder="Введіть назву товару" />
//     <ul id="itemsContainer"></ul>
//     <div class="cart">
//         <h2>Кошик</h2>
//         <ul id="cartItemsContainer"></ul>
//     </div>
// </div>;
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>;


// const products = [
//     'телевізор_Samsung',
//     'телевізор_LG',
//     'телевізор_Xiaomi',
//     'телефон_Samsung',
//     'телефон_Apple',
//     'телефон_Xiaomi',
//     'планшет_Samsung',
//     'планшет_Apple',
//     'планшет_Xiaomi',
//     'ноутбук_ASUS',
//     'ноутбук_Apple',
//     'ноутбук_Lenovo',
// ];

// const input = document.getElementById('searchInput');
// const list = document.getElementById('itemsContainer');
// const listCart = document.getElementById('cartItemsContainer');

// list.addEventListener('click', onClick);
// function onClick(e) {
//     if (e.target.nodeName !== 'BUTTON') return;
//     // listCart.append(e.target.parentNode)
//     const item = document.createElement('li');
//     const btn = document.createElement('button')
//         btn.addEventListener('click', e => e.target.parentNode.remove());
//     const text = document.createElement('p');
//     btn.textContent = 'Видалити';
//     text.textContent = e.target.previousElementSibling.textContent;
//     item.append(text, btn);
//     listCart.append(item)
// }

// input.addEventListener('input', _.throttle(checkList, 500));
// function checkList(e) {
//     list.innerHTML = '';
//     const value = e.target.value.toLowerCase();
//     if (!value) return;
//     const items = products.filter(el => el.toLowerCase().includes(value));
//     list.append(...murkup(items));
// }

// function murkup(items) {
//     return items.map(el => {
//         const item = document.createElement('li');
//         const btn = document.createElement('button');
//         const text = document.createElement('p');
//         btn.textContent = 'Додати у кошик';
//         text.textContent = el;
//         item.append(text, btn);
//         return item;
//     });
// }
