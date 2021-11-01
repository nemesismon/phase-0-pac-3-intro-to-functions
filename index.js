// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }

  sayHello();

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }

  sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }

  sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }

  sayHelloToBrendan();

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething(`${1+1}`); // passing the argument 'anything' into our function

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

  // console.log(firstName);

  // function say(greeting, firstName) {
    // console.log(`${greeting}, ${firstName}!`);
  // }

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
  }

  say("Julio", "hello");

  function add(x, y) {
    x + y;
  }

  add(1, 2);

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Howdy", "partner"));