const http = require('http');

const EventEmmitter = require('events');
const { EventEmitter } = require('stream');

const chat = new EventEmmitter();

chat.on('message', (user, text) => {
    console.log(`[${user}] : [${text}]`)
})
chat.emit("message", "Bibek", "Hello everyone!");
chat.emit("message", "Dhiraj", "Hi Bibek!");


const shop = new EventEmmitter();

shop.on("orderPlaced", (id, items) => {
  console.log(`Order #${id} with ${items.join(", ")} received.`);
});

shop.emit("orderPlaced", 101, ["Laptop", "Mouse"]);



const users = new EventEmitter();

users.on("registered", (email) => {
  console.log(`Welcome email sent to ${email}`);
});

function registerUser(email) {
  console.log(`User registered: ${email}`);
  users.emit("registered", email);
}

registerUser("bibek@example.com");


const user = new EventEmitter();

user.once("login", (name) => {
  console.log(`${name} logged in for the first time`);
});

user.emit("login", "Bibek");
user.emit("login", "Bibek"); 



const logger = new EventEmitter();

logger.on("log", (msg) => {
  console.log(`[LOG] ${msg}`);
});

logger.emit("log", "User logged in");
logger.emit("log", "User clicked a button");


const payment = new EventEmitter();

payment.on("success", (amount) => {
  console.log(`Payment of $${amount} completed`);
});

payment.on("failed", () => {
  console.log(` Payment failed`);
});

payment.emit("success", 99.99);


const notify = new EventEmitter();

notify.on("newFollower", (user) => {
  console.log(`${user} followed you!`);
});

notify.emit("newFollower", "Bibek");




http.createServer((request, response) => {
    if(request.url === '/'){
        response.end('Homepage')
    }else if (request.url === '/slow'){
        setTimeout(() => {
            response.end('Slow page loaded')
        }, 3000)
    }else {
        response.end('404 not found')
    }
}).listen(3000, ()=> console.log('Server is  running'))