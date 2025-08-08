//Basics of TS
let userName: string = "Santos";
let age: number = 25;
let isLoggedIn: boolean = true;

console.log(userName, age, isLoggedIn)
// while executing this code first we need to do tsc <filename.tsc> in terminal and then compile it using node < filename.js > in the same terminal


type User = {
    name : string,
    age : number,
    location ?: string //?: means it is optional
}

const newUser : User = {
    name : 'Santosh',
    age: 23,
    location: 'Dhangadhi'
}
const newUser2 : User = {
    name : 'Sameer',
    age : 22,
}

console.log(newUser, newUser2)

//Interface with default parameters in function
interface Person {
    firstName : string,
    lastName : string,
    age: number,
    location?:string
}

function greetUser(person:Person) {
    const location = person.location? person.location : 'Dhangadhi'
    console.log(`Hello from ${person.firstName} ${person.lastName} from ${location}. `)
}
greetUser({firstName:'Santosh', lastName:'Upadhyay', age:25})

//Functions in TS

//Normal function
function addNumbers (x:number, y:number):number {
    return x + y
}
console.log(addNumbers(2,5))

function isAdult(age:number):boolean {
    return age>=18
}
console.log(isAdult(15))

//Default parameters

function greet( name: string = 'Guest', title?:string):string{
    return `Hello, ${title?title + '': ''}${name}`
}
console.log(greet())


//Generics
function identity<T>(arg: T): T {
  return arg;
}
// Using with a string
let output1 = identity<string>("Hello World");
console.log(output1);
// Using with a number
let output2 = identity(123);
console.log(output2); // 123
//TS can infer the types


//We can also use generics with interfaces and classes:
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair1: Pair<number, string> = { first: 1, second: "One" };

class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue()); // Hello
