const http = require('http')

console.log('Fetching the user datas..');

setTimeout( () => {
    console.log('Data fetched from API')
}, 2000)

console.log('Doing other tasks')


console.log("Start");

setTimeout(() => console.log("setTimeout done"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");

