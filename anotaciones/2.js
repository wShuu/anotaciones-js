//Anotaciones JavaScript #2

//Entrada de datos del usuario
//Se utiliza la función `prompt` para solicitar al usuario que ingrese el nombre de su héroe favorito
let nombre = prompt("Dime el nombre de tu héroe fav del dota2: ");

console.log("(´• ω •`) " + nombre);


//Operadores de asignacion
//Se utilizan diferentes operadores de asignación para manipular variables

let num1 = 10;

num1 += 5 //num1 se incrementa en 5

console.log(num1);

let num2 = 10;

num2 -= 5 //num2 se reduce en 5

console.log(num2);

let num3 = 10;

num3 *= 5 //num3 se multiplica por 5

console.log(num3);

let num4 = 10;

num4 /= 5 //num4 se divide por 5

console.log(num4);

let num5 = 10;

num5 %= 6

console.log(num5);

let num6 = 10;

num1 **= 5 //num5 se divide por 6 y se asigna el residuo

console.log(num6);


//Operadores Aritmeticos
//Se utilizan para realizar operaciones matemáticas en variables

num1 = 15;

num2 = 5;

resultado = num1 + num2; //Suma de num1 y num2
console.log(resultado);

num1 = 15;

num2 = 5;

num1--; //Decremento de num1 en 1

resultado = num1;
console.log(resultado);

num1 = 15;

num2 = 5;

resultado = num1 / num2; //División de num1 entre num2
console.log(resultado);

num1 = 15;

num2 = 5;

resultado = num1 ** num2; //Elevación de num1 a la potencia de num2
console.log(resultado);

num1 = 15;

num2 = 5;

num1++; //Incremento de num1 en 1

resultado = num1;
console.log(resultado);

num1 = 15;

num2 = 5;

resultado = num1 & num2; //Operación de bits AND entre num1 y num2
console.log(resultado);

num1 = 15;

num2 = 5;

resultado = num1 - num2; //Resta de num2 de num1
console.log(resultado);

num1 = 15;

num2 = 5;

resultado = -num1; //Negación de num1
console.log(resultado);

//Concatenacion

saludo = "¡Hola pedro!";
pregunta = "¿Como estas?";

frase = saludo + pregunta; //Concatenación de las cadenas

console.log(frase);

num2 = "9";
num3 = 0;

frase = num2.concat(num3); // Concatenación de num7 y num8 como cadenas

console.log(frase);