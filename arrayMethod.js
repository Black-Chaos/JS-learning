// const cars = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//     { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(cars));

// -------------------------------------------------

// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
// із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//     cars.map(car => ({
//         ...car,
//         price: car.price * (1 - discount),
//     }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ------------------------------------------------

// filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// -----------------------------------------------

// getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

// console.table(getCarsWithDiscount(cars));


// -----------------------------------------------

// getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// -----------------------------------------------

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// -----------------------------------------------

// sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => [...cars].sort((a,b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// -----------------------------------------------

// sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// -----------------------------------------------

// sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order

// const sortByModel = (cars, order) => [...cars].sort((a,b) => (order === 'asc' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model)));

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// -----------------------------------------------

// getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => cars.reduce((acc, {amount}) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// -----------------------------------------------

// getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => cars.reduce((acc, car) => (car.onSale ? acc.concat(car.model) : acc), []);

// console.table(getModelsOnSale(cars));

// -----------------------------------------------

// getSortedCarsOnSale повертає масив автомобілів на розпродажі(Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => cars.filter(({onSale}) => onSale).sort((a,b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));