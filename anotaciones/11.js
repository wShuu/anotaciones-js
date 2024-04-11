//Anotaciones JavaScript #11
//Métodos de cadenas

//startsWith
let cadena = "cadena de prueba";
let cadena2 = "cadena";
//Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
resultado = cadena.startsWith(cadena2);

console.log(resultado);

//endsWith
let cadena3 = "cadena de prueba";
let cadena4 = "prueba";
//Si una cadena termina con los caracters de otra cadena, devuelve true, sino devuelve false.
resultado2 = cadena3.endsWith(cadena4);

console.log(resultado2);

//includes
let cadena5 = "it da wooo";
let cadena6 = "woo";
//si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
resultado3 = cadena5.includes(cadena6);

console.log(resultado3);

//indexOf
let cadena7 = "so cute your tears";
let cadena8 = "tears";
//devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
resultado4 = cadena7.indexOf(cadena8);

console.log(resultado4);

//lastIndexOf
let cadena9 = "so cute your tears... tears";
let cadena10 = "tears";
//devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.
resultado5 = cadena9.lastIndexOf(cadena10);

console.log(resultado5);

//padStart
let cadena11 = "u ";
//Rellenar cadena al principio con los caracteres deseados.
resultado6 = cadena11.padStart(8, "xa");

console.log(resultado6);

//padEnd
let cadena12 = " u";
//Rellenar cadena al final con los caracteres deseados.
resultado7 = cadena12.padEnd(8, "xa");

console.log(resultado7);

//repeat
let cadena13 = "dayo";
//Rellenar cadena al final con los caracteres deseados.
resultado8 = cadena13.repeat(3);

console.log(resultado8);

//split
let cadena14 = "ahoy ahoy ahoy";
//Divide la cadena como le pidamos.
resultado9 = cadena14.split(" ");

console.log(resultado9[2]);

//substring
let cadena15 = "132";
//Nos retorna un pedazo de la cadena que se divide.
resultado10 = cadena15.substring("0,2");

console.log(resultado10);

//toLowerCase
let cadena16 = "SKZ";
//Convierte una cadena a minuscula.
resultado11 = cadena16.toLowerCase();

console.log(resultado11);

//toUpperCase
let cadena17 = "skz";
//Convierte una cadena a mayuscula.
resultado12 = cadena17.toUpperCase();

console.log(resultado12);

//toString
let cadena18 = ["branded", "tears"];
//Metodo devuelve una cadena que representa al objeto especificado.
resultado13 = cadena18.toString();

console.log(resultado13[1]);

//trim
let cadena19 = "  ash  ";
//Elimina los espacios en blanco al principio y al final de una cadena.
resultado14 = cadena19.trim();

console.log(resultado14.length);

//trimEnd
let cadena20 = "  ash   ";
//Elimina los espacios en blanco al final de una cadena.
resultado15 = cadena20.trimEnd();

console.log(resultado15.length);

//trimStart
let cadena21 = "   ash  ";
//Elimina los espacios en blanco al principio de una cadena.
resultado16 = cadena21.trimStart();

console.log(resultado16.length);