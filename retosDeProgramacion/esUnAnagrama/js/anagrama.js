/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

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

/*
    Test cases

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
*/
