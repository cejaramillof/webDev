// https://medium.com/@zeolearn/functional-programming-in-javascript-6ef89de6e0ef
let multiplicar = (a, b) => a * b;
// multiplicar(4, 5);

// currying
multiplicar = a => b => a * b; // point free style
multiplicar(4)(5);

let doblar = multiplicar(2); // generalización de doblar

doblar(10); // especialización de multiplicar

let sumar = a => b => a + b;

let incrementar = sumar(1);
incrementar(1);

let componer = (f, g) => x => f(g(x)); // Right to Left

let doblarEIncrementar = componer(incrementar, doblar);

doblarEIncrementar(5);

// Composes - Right to Left
const compose = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)
// Pipes Left to Right
