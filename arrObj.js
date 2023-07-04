const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];
// const getUsersWithEyeColor = (users, color) => users.filter(el => el.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter(({age}) => age >= minAge && age <= maxAge);
//     console.log(getUsersWithAge(users, 20, 30));

// const getUsersWithFriend = (users, friendName) => users.filter(el => el.friends.includes(friendName));
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// const getTotalFriendCount = users => users.reduce((acc, el) => acc + el.friends.length);
// console.log(getTotalFriendCount(users));

// const sortByDescendingFriendCount = users =>
//     [...users].sort((a, b) => a.friends.length - b.friends.length);
//     console.log(sortByDescendingFriendCount(users));

// const getTotalBalanceByGender = (users, gender) =>
//     users.reduce((acc, el) => {
//         if (el.gender === gender) {
//             return acc + el.balance;
//         }
//         return acc;
//     }, 0);
//     console.log(getTotalBalanceByGender(users, 'male'));