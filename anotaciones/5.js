//Anotaciones JavaScript #5

//Bucles e iteración, definición:
//Son estructuras que permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica

//Sentencia "while" (Crea un bucle que ejecuta un bloque de código mientras la condición sea verdadera):
let contador1 = 0;

while (contador1 < 5) {
    console.log(contador1); //Salida: 0 1 2 3 4
    contador1++;
}
 
//Sentencia "do while" (La evaluación de la condición se realiza después de ejecutar el bloque de código, asegurando que el bloque se ejecute al menos una vez):
let contador2 = 0;

do {
    console.log(contador2); //Salida: 0 1 2 3 4
    contador2++;
} while (contador2 < 5);

//Sentencia "break" (Se utiliza para salir de un bucle antes de que la condición de finalización se cumpla):
for (let contador3 = 0; contador3 < 5; contador3++) {
    if (contador3 === 3) {
        break;
    }
    console.log(contador3);//Salida: 0 1 2
}

//Sentencia "for" (Crea un bucle que consiste en tres expresiones: la inicialización, la condición de continuación y la expresión de iteración):
for (let contador4 = 0; contador4 < 5; contador4++) {
    console.log(contador4); //Salida: 0 1 2 3 4
}

//Sentencia "continue" (Se utiliza para saltar a la siguiente iteración del bucle, omitiendo el resto del código dentro del bucle):
for (let contador5 = 0; contador5 < 5; contador5++) {
    if (contador5 === 2) {
        continue;
    }
    console.log(contador5); //Salida: 0 1 3 4
}

//Sentencia "for in":
const persona = {
    name: 'Shuu',
    edad: 20,
    trabajo: 'dev'
};

for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}

//Sentencia "for of":
const colores = ['rojo', 'verde', 'azul'];

for (let color of colores) {
    console.log(color); //Salida: rojo verde azul
}

//Sentencia "label" (Asociar cualquier bucle a un nombre):
array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forShuu:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            console.log(array);
            break forShuu;
        }
    } else {
        console.log(array2[array]);
    }
}