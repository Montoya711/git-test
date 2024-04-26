/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

let poligono="cuadrado";
let width= 5;
let height=10;
let base=15;
console.log(areaPoligono("triangulo"));

/*
let poligono = prompt("El area de que poligono quieres calcular? \n (Cuadradro/Rectagulo/Triangulo)")
console.log(areaPoligono(poligono));
*/

function areaPoligono(poligono){
    poligono=poligono.toLowerCase();
    if(poligono == "cuadrado"){
        // let width = Number(prompt("Width: "));
        let area = width*2;
        return `Area of cuadrado = ${width}*2 = ${area}`
    }else if(poligono == "rectangulo"){
        //let height = Number(prompt("Height: "));
        //let width = Number(prompt("Width: "));
        let area = width * height;
        return `Area of rectangulo = ${width} * ${height} = ${area}`
    }else if(poligono == "triangulo"){
        //let base = Number(prompt("Base: "));
        //let height = Number(prompt("Height: "));
        let area = (base * height) / 2;
        return `Area of Triangulo = ${base} * ${height} / 2 = ${area}`
}
} 