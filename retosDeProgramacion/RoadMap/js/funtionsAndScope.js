
// Function examples
console.log("Function Examples:");

// Function without parameters and return value
function greet() {
    console.log("Hello, world!");
}
greet();

// Function with parameters and return value
function add(a, b) {
    return a + b;
}
let result = add(3, 5);
console.log("Result of addition:", result);

// Function with default parameter value
function multiply(x, y = 2) {
    return x * y;
}
console.log("Result of multiplication:", multiply(4)); // Using default value for y

// Function expression (function assigned to a variable)
const subtract = function(a, b) {
    return a - b;
};
console.log("Result of subtraction:", subtract(8, 3));

// Arrow function
const divide = (a, b) => a / b;
console.log("Result of division:", divide(10, 2));

// Nested function (function inside another function)
function outerFunction() {
    let outerVariable = "I'm outer!";
    
    function innerFunction() {
        let innerVariable = "I'm inner!";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable);
    }
    
    innerFunction();
}
outerFunction();

// Using built-in functions
console.log("Using built-in functions:");
let array = [1, 2, 3, 4, 5];
console.log("Array length:", array.length); // Using built-in length property of arrays

// Variable scope: local vs global
console.log("\nVariable Scope:");
let globalVariable = "I'm global!";

function scopeTest() {
    let localVariable = "I'm local!";
    console.log(globalVariable); // Accessing global variable from within the function
    console.log(localVariable);
}

scopeTest();
// console.log(localVariable); // This will throw an error because localVariable is not defined globally

// Exercise

console.log("Exercise");

/*
* Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/
 