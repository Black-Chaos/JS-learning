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