const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Andrew',
            age: 29
        });
    }, 5000);
    // reject('This broke :(');
});

console.info('Before');

promise.then((data) => {
    console.info(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('The other promise');
        }, 5000);
    });
})
.then((str) => {
    console.info('My string', str);
})
.catch((error) => {
    console.info('Erra:', error);
});

console.info('After');
