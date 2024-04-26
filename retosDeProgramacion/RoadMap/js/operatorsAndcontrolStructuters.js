// Types of operators and control structures:

// Arithmetic operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Logical operators
let x = true;
let y = false;
console.log("\nLogical Operators:");
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !x);

// Comparison operators
console.log("\nComparison Operators:");
console.log("Equal to:", a === b);
console.log("Not equal to:", a !== b);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);
console.log("Greater than or equal to:", a >= b);
console.log("Less than or equal to:", a <= b);

// Assignment operators
let c = 7;
console.log("\nAssignment Operators:");
c += 3;
console.log("Add and assign:", c);
c -= 2;
console.log("Subtract and assign:", c);
c *= 4;
console.log("Multiply and assign:", c);
c /= 2;
console.log("Divide and assign:", c);
c %= 3;
console.log("Modulus and assign:", c);

// Identity operators
let d = 10;
let e = '10';
console.log("\nIdentity Operators:");
console.log("Strict equality:", d === e);
console.log("Loose equality:", d == e);

// Membership operators
let arr = [1, 2, 3];
console.log("\nMembership Operators:");
console.log("Includes:", arr.includes(2));
console.log("Index of:", arr.indexOf(3));

// Bitwise operators
let f = 5; // Binary representation: 101
let g = 3; // Binary representation: 011
console.log("\nBitwise Operators:");
console.log("Bitwise AND:", f & g);   // Result: 001 (1 in decimal)
console.log("Bitwise OR:", f | g);    // Result: 111 (7 in decimal)
console.log("Bitwise XOR:", f ^ g);   // Result: 110 (6 in decimal)
console.log("Bitwise NOT:", ~f);      // Result: -6 (minus of 6 in decimal)
console.log("Left shift:", f << 1);   // Result: 1010 (10 in decimal)
console.log("Right shift:", f >> 1);  // Result: 10 (2 in decimal)


// Control structures
console.log("\nControl Structures:");

// Conditional statement
let age = 20;
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// Iterative statements
// For loop
console.log("Counting from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ForEach loop
console.log("Counting from 1 to 5 using forEach loop:");
[1, 2, 3, 4, 5].forEach(num => console.log(num));

// While loop
console.log("Counting from 1 to 5 using while loop:");
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// Do-While loop
console.log("Counting from 1 to 5 using do-while loop:");
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Exception handling
try {
    let result = a / 0; // Division by zero
   // console.log("Error:"+result);
} catch (error) {
    console.log("Error:", error.message);
}
// Exercise
/*
* DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

console.log("Exercise: ");
for(let i=10;i<=55;i++){
    if(i === 16 || i % 3 === 0){
        continue;
    }if(i%2==0){
        console.log(i);
    }
}  
