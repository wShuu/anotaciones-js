//Anotaciones JavaScript #3

//Operadores de comparación
//Se utilizan para comparar dos valores y devolver un resultado booleano que indica si es verdadero o falso
//Tipos de operadores de comparación
//Son fundamentales para realizar comparaciones en JavaScript

//Igualdad (Comprueba si dos valores son iguales y del mismo tipo de datos):
let num1 = 9;
let num2 = 9;

console.log('igualdad: ' + num1 == num2);

//Identity (Comprueba si dos valores son iguales):
let num3 = 8;
let num4 = 7;

console.log('identidad: ' + num3 === num4);

//Inequality (Comprueba si dos valores no son iguales):
let num5 = 1;
let num6 = 1;

console.log('inecualidad: ' + num5 != num6);

//Non-identity (Comprueba si dos valores no son iguales o no del mismo tipo de datos):

let num7 = 5;
let num8 = 5;

console.log('sin identidad: ' + num7 !== num8);

//Greater than (Comprueba si el valor de la izquierda es mayor que el de la derecha):

let num9 = 10;
let num10 = 2;

console.log('mayor que: ' + num9 > num10);

//Less than (Comprueba si el valor de la izquierda es menor que el de la derecha):

let num11 = 20;
let num12 = 8;

console.log('menor que: ' + num11 < num12);

//Greater than or equal (Comprueba si el valor de la izquierda es mayor o igual que el de la derecha):

let num13 = 15;
let num14 = 15;

console.log('mayor o igual: ' + num13 >= num14);

//Less than or equal (Comprueba si el valor de la izquierda es menor o igual que el de la derecha):

let num15 = 8;
let num16 = 4;

console.log('menor o igual que: ' + num15 <= num16);


//Operadores lógicos
//Nos devuelven un resultado a partir de que se cumpla (o no) una condición y su resultado es booleano

//AND lógico (Devuelve "true" si ambas expresiones son verdaderas, de lo contrario, devuelve "false"):
let nam1 = 12;
let nam2 = 24;

afirm1 = nam1 > nam2;
afirm2 = num1 != num2;

console.log('and logico: ' + afirm1 && afirm2);

//OR lógico (Devuelve "true" si al menos una de las expresiones es verdadera, de lo contrario, devuelve "false"):
let nam3 = 12;
let nam4 = 24;

afirm1 = nam1 > nam2;
afirm2 = num1 != num2;

console.log('Or logico: ' + afirm1 || afirm2);

//NOT lógico (Niega el valor de la expresión. Si la expresión es verdadera, devuelve "false"; si es falsa, devuelve "true"):
let nam5 = 12;
let nam6 = 24;

afirm1 = nam1 > nam2;
afirm2 = num1 != num2;

console.log('NOT logico: ' + !afirm2);


//Ejemplo con combinación de operaciones

nam1 = 12;
nam2 = 24;
nam3 = 25;
nam4 = 92;
nam5 = 91;

op = (nam1 < nam2 || nam2 < nam3) && (!nam1 && nam5 != nam3);

console.log('combinacion de operadores: ' + op);


//Condicionales
//Son importantes para controlar el flujo de ejecución en un programa


//Tipos de condicionales
//Condicional "if" (Se utiliza para ejecutar un bloque de código si una condición es verdadera):

let name = "kozeki ui";

if (name == "kozeki ui") {
    console.log("uwu")
}

//Condicional "else if" (Se utiliza para proporcionar condiciones adicionales que se evalúan si la condición en el "if" es falsa):


if (name == "kozeki ui") {
    console.log("uwu")
}

else if (name == "kozeki") {
    alert("wife " + name)
}

//Condicional "else" ():

if (name == "kozeki ui") {
    console.log("uwu")
}

else if (name == "kozeki") {
    console.log("wife " + name)
}

else {
    console.log("u.u")
}