
//String Operations
console.log("String Operations:");

// Access specific characters
let str = "Hello world";
console.log("Access specific characters:");
console.log("First character:", str[0]); // Access the first character
console.log("Last character:", str[str.length - 1]); // Access the last character

// Substring
console.log("\nSubstrings:");
console.log("Substring from index 5:", str.substring(5)); // From index 5 to the end
console.log("Substring from index 2 to 6:", str.substring(2, 6)); // From index 2 to 6

// Length
console.log("\nLength of the string:", str.length);

// Concatenation
console.log("\nConcatenation:");
let str2 = "Goodbye!";
let concatenatedStr = str.concat(" ", str2);
console.log("Concatenated string:", concatenatedStr);

// Repetition
console.log("\nRepetition:");
console.log("String repeated 3 times:", str.repeat(3));

// Traversal
console.log("\nTraversal:");
for (let char of str) {
    console.log(char);
}

// Conversion to uppercase and lowercase
console.log("\nConversion to uppercase and lowercase:");
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// Replacement
console.log("\nReplacement:");
console.log("Replace 'world' with 'friend':", str.replace("world", "friend"));

// Splitting
console.log("\nSplitting:");
console.log("Splitting the string into words:", str.split(" "));

// Joining
console.log("\nJoining:");
let arr = ["Hello", "world"];
console.log("Joining an array of words into a string:", arr.join(" "));

// Interpolation
console.log("\nInterpolation:");
let name = "John";
console.log(`Hello, ${name}! Welcome.`);

// Verification
console.log("\nVerification:");
console.log("Does the string contain 'world'?", str.includes("world")); // Checks if the string contains another string
console.log("Does the string start with 'Hello'?", str.startsWith("Hello")); // Checks if the string starts with another string
console.log("Does the string end with 'world'?", str.endsWith("world")); // Checks if the string ends with another string


/*  * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//* - Palíndromos



//  * - Anagramas

let words=prompt("Write two words to know if they are anagrams:");
let [word1,word2] = words.split(" ");

console.log(areAnagrams(word1,word2));

function areAnagrams(word1,word2){
    word1=word1.toLowerCase();
    word2=word2.toLowerCase();
    let sortedWord1= word1.split("").sort().join("");
    let sortedWord2= word2.split("").sort().join("");
    return sortedWord1===sortedWord2
}

//  * - Isogramas
