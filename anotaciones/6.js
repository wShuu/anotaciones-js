//Aquí van las anotaciones del vidio de js #6

//Funciones
//Las funciones son bloques fundamentales que permiten organizar y reutilizar código

//Formas de Crear Funciones
//Declarar una funcion
function saludar() {
    console.log("¡Muy buenas n.n!");
}

saludar();

//Expresión de funciones
const sumar = function(num1, num2) {
    return num1 + num2;
};

console.log(sumar(3, 4)); //Salida: 7

//Funcion flecha:
const multiplicar = (num2, num3) => num2 * num3;

console.log(multiplicar(2, 3)); //Salida: 6


//Return (Se usa dentro de una función para devolver un valor):
function cuadrado(num4) {
    return num4 * num4;
}

let resultado = cuadrado(5); //El resultado contendrá 25

//Parámetros (Pueden aceptar parámetros, que son valores que la función utiliza para realizar su tarea):
function saludo(name) {
    console.log("Hola " + name + "uwu");
}

saludo("Kazuu"); //Salida: Hola Kazuu uwu

//Scope (Cuando creamos una variable por fuera no existe, es regional o global):
function ejemploScope() {
    let mensaje = "Holaa desde la función n.n!";
    console.log(mensaje);
}

//Funciones Flecha (Son especialmente útiles en situaciones como funciones de retorno):
const suma = (num5, num6) => num5 + num6;

console.log(suma(3, 4)); // Salida: 7