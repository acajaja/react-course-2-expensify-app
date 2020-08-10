// const person = {
//     name: 'Bifft',
//     age: 289,
//     location: {
//         city: 'Blo',
//         temp: 342
//     }
// };

// // ES6 Object Destructuring - similar to list($var, ...) in PHP
// const { name = 'Anonymous', age } = person;
// // Rename temp
// const { city, temp: temperature } = person.location;

// console.info(`${name} is ${age}.`);
// console.info(`It's ${temperature} in ${city}.`);

const book = {
    title: 'Aaa',
    author: '',
    publisher: {
        name: 'Adef'
    }
};

const { name: publisherName = 'Self Published' } = book.publisher;

console.info(`${book.title} is published by ${publisherName}.`);

// // ES6 Array Destructuring - similar to list($var, ...) in PHP

const address = ['123 Abc St.', 'Buffalo', 'Colorado', '12345'];

// const [street, city, state, zip, defaultA = 'Dick'] = address;
// console.info(`You're in ${city} ${state} pink!`);

// const [, , state] = address; 
// console.info(`You're in ${state} pink!`);

const items = ['Coffee - Iced', '45.01', '52.99', '69.69'];

const [item, , price] = items;

console.info(`${item} costs \$${price}.`);
