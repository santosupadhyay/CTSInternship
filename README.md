# CTSInternship
In this repo, I will be uploading everyday tasks I performed.


Day4:
Error Types:
    Syntax Error: It occurs if there is syntactical error in the Code.

        Missing closing parenthesis
        console.log("Hello world"  SyntaxError: missing ) after argument list


    Reference Error: You are using that variable which is not defined or if you are trying to access variables outside its scope 
        example : console.log(name) gives reference error as name is not declared
            console.log(name)

    TypeError: If you are using something in a wrong manner 
    Real life example:
    Imagine, the user data is not returned from form, and you are using a function .toLoweCase(), then we will get a error called TypeError
        let num = 5;
        num.toUpperCase();  TypeError: num.toUpperCase is not a function



Error debugging techniques

1. console.log() - to check step by step value
function add(a, b) {
  console.log("Value of a:", a);
  console.log("Value of b:", b);
  return a + b;
}

add(5, undefined); 

2. trycatch - to avoid crashing of code 
try {
  let result = 10 / x; // x is not defined
} catch (error) {
  console.log("Error found:", error.message);
}

3. Debugger Keyword – used with browser devtools
function multiply(x, y) {
  debugger; // Execution stops here in DevTools
  return x * y;
}
multiply(5, 3);


Let us take a real life example : We pressed login button, but nothing happened then we use console.log() to check if email and password are being sent or not. 


Collections in Js
Set?
    - Stores unique values
    - Example: If there are same names in an array, we use set to name them unique

    let names = ['Santosh', 'Rajan', 'Santosh']
    let uniqueNames = new Set(names)
Map?
    - stores key-value pair
    - every key is unique
    - example : 
        let userMap = new Map();
        userMap.Set('name', 'Santosh')
        userMap.Set('age',25)

Spred Operator?
    - Easily merge object or arrays
    - Example :
        const frTeam = ['Santosh', 'Ram']
        const bkTeam = ['Roshan', 'Khem']
        const fullTeam = [...frTeam, ...bkTeam]
        console.log(fullTeam)
    
    -Example:
        const user = {
            name:'Santosh',
            age:23
        }
        const updatedUser = {...user, location: 'Dhangadhi'}
this keyword?
    - 'this' means : who is speeaking
    - Inside function, 'this' refers to that object upon which function is called

    -Example:
        let user = {
            name:'Ravi",
            greet(){
                console.log('Hi,' + this.name)
            }
        }
        user.greet()

Heap?
    - It is a part of JS memory where objects are stored
    - Whenever you initialize object or array it is stored in heap memory of JS

Closures?
    - If one function(inner) is inside another function(outer) and inner function remembers outer function's variables, its closure
    - Example:
        function outer() {
            let name = "Santos";

            function inner() {
                console.log("Hello, " + name);
            }
        return inner;
        }

        const greet = outer();
        greet();

Cookies?
    - Small data that gets stored in the browser
    - We mostly store them in user's browser like 'Remember Me'
    - document.cookie = 'username = santos'
    - const cookies = document.cookie

    Real use of cookies:
        - auto login user next time
        - save language preferences
        - store theme choice(Dark/Light)
Sessions?
    - It is a temporary memory in server side
    - When user logins, server creates his/her session which gets vanished after certain interval of time

    Real use of session:
        - stores current user activity
        - protect authenticated routes
        - temporary data handling like OTP Verification


