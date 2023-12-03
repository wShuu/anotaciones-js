//Aquí van las anotaciones del vidio de js #4
//Primer ejercicio para desarrollar la lógica
//Simulación interactiva de compra de cartas 

let dineroShuu = prompt("¿Cuánto dinero tiene Shuu para comprar cartas?");
let dineroKazuu = prompt("¿Cuánto dinero tiene Kazuu para comprar cartas?");
let dineroStepham = prompt("¿Cuánto dinero tiene Stepham para comprar cartas?");

if (dineroShuu >= 100 && dineroShuu < 500) {
    alert("Puedes comprar la carta Red-Eyes Black Dragon.");
}

else if (dineroShuu >= 500 && dineroShuu < 1000) {
    alert("Puedes comprar la carta Dark Magician.");
}

else if (dineroShuu >= 1000 && dineroShuu < 1500) {
    alert("Puedes comprar la carta Blue-Eyes White Dragon.");
} else {
    alert ("Lo siento Shuu, no tienes suficiente dinero para comprar ninguna carta");
}

if (dineroKazuu >= 100 && dineroKazuu < 500) {
    alert("Puedes comprar la carta Red-Eyes Black Dragon.")
}

else if (dineroKazuu >= 500 && dineroKazuu < 1000) {
    alert("Puedes comprar la carta Dark Magician.")
}

else if (dineroKazuu >= 1000 && dineroKazuu < 1500) {
    alert("Puedes comprar la carta Blue-Eyes White Dragon.")
} else {
    alert ("Lo siento Kazuu, no tienes suficiente dinero para comprar ninguna carta")
}

if (dineroStepham >= 100 && dineroStepham < 500) {
    alert("Puedes comprar la carta Red-Eyes Black Dragon.")
}

else if (dineroStepham >= 500 && dineroStepham < 1000) {
    alert("Puedes comprar la carta Dark Magician.")
}

else if (dineroStepham >= 1000 && dineroStepham < 1500) {
    alert("Puedes comprar la carta Blue-Eyes White Dragon.")
} else {
    alert ("Lo siento Stepham, no tienes suficiente dinero para comprar ninguna carta")
}

//Arrays
//Como crear un array de frutas
//Las posiciones dentro de los arrays empiezan a contarse desde el 0

let frutas = ["banana", "manzana", "pera"];

//Los [] al lado del array dentro de console.log sirven para lanzar en consola un dato en especifico
console.log(frutas)[0];


//Arrays asociativos
//Se utiliza para ordenar una cantidad de datos que asocia claves con valores y poder trabajarlos de la mejor forma
//Primer ejemplo practico

let pc = {
    procesador: "AMD Ryzen 3400G",
    ram: "16GB",
    espacio: "1TB"
};

let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `Características de mi actual PC: <br>
        El procesador es: <b>${procesador}<b> <br>
        La memoria ram es: <b>${ram}<b> <br>
        El espacio en disco es de: <b>${espacio}<b>`;

console.log(frase);