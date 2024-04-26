/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

let numero=Number(prompt("Introduce un numero para seber si es primo."))
console.log(esPrimo(numero));

function esPrimo(numero){
    if(numero <= 1){
        return false;
    }
    for(let i=2;i*i<=numero;i++){
        if(numero % i == 0){
            return false;
        }
    }return true;
}



for(let j=1;j<=100;j++){
    if(esPrimo(j)){
    console.log(j);
    }
}
