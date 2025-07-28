
//Syntax Error
// console.log("Hello world"

//     console of this code:
//     /Users/santoshupadhyay/Desktop/CTSInternship/Day4/day4codes.js:2
//     console.log("Hello world"
//             ^^^^^^^^^^^^^

//     SyntaxError: missing ) after argument list
//     at wrapSafe (node:internal/modules/cjs/loader:1486:18)
//     at Module._compile (node:internal/modules/cjs/loader:1528:20)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

//Reference error
// console.log(name)
//console of this code:
// /Users/santoshupadhyay/Desktop/CTSInternship/Day4/day4codes.js:21
// console.log(name)
//             ^

// ReferenceError: name is not defined
//     at Object.<anonymous> (/Users/santoshupadhyay/Desktop/CTSInternship/Day4/day4codes.js:21:13)
//     at Module._compile (node:internal/modules/cjs/loader:1554:14)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

//Type Error
// let num = 5;
// num.toUpperCase();
//console of this code:
// /Users/santoshupadhyay/Desktop/CTSInternship/Day4/day4codes.js:41
// num.toUpperCase();
//     ^

// TypeError: num.toUpperCase is not a function
//     at Object.<anonymous> (/Users/santoshupadhyay/Desktop/CTSInternship/Day4/day4codes.js:41:5)
//     at Module._compile (node:internal/modules/cjs/loader:1554:14)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

// Set
let names = ['Santosh', 'Rajan', 'Santosh']
let uniqueNames = new Set(names)
console.log(uniqueNames)

let userMap = new Map();
userMap.set('name', 'Santosh')
userMap.set('age', 25)


// Spread Operator
const frontendTeam = ['Santosh', 'Roshan'];
const backendTeam = ['Khem', 'Achyut'];

const fullTeam = [...frontendTeam, ...backendTeam]
console.log(fullTeam)

const user = {
    name: 'Santosh',
    age: 25
}
const updatedUser = { ...user, location: 'Dhangadhi' }
console.log(updatedUser)

//This keyword
const person = {
    name: 'Sanots',
    greet() {
        console.log('Hello,' + this.name)
    }
}
person.greet()

//Closures
function outer() {
    let name = 'Santos'

    function inner() {
        console.log(name)
    }
    return inner;
}
let greeting =outer();
greeting()
