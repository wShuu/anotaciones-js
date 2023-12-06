//Anotaciones JavaScript #7
//Ejemplos de código JS poniendo en practica lo aprendido

//Sistema para verificar la entrada a una fiesta nocturna

let free = false;

const validarCliente = (time)=>{
    let edad = prompt ("¿Cual es tu edad?");
    if(edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Por ser el primer cliente despues de las 2:00 am, puedes pasar gratis.")
            free = true;
        } else {
            alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada.`)
        }

    } else {
        alert("Lo siento, por ser menor de edad no podras pasar.")
    } 
}

validarCliente(23.15);
validarCliente(23.40);
validarCliente(1.50);
validarCliente(2);
validarCliente(2.40);
validarCliente(3.30);


//Sistema que registra las asistencias y faltas

let cantidad = prompt ("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const asistencias = (nombre, p) =>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}



for (i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        asistencias(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:
    Presentes: ${alumnosTotales[alumno][1]}
    Faltas: ${30 - alumnosTotales[alumno][1]}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "Reprobado por inasistencias";
    } else {
        resultado += ""
    } 
    console.log (resultado);
}


//Calculadora que simplifica el trabajo

const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const division = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicacion = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion quieres hacer?")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = suma(numero1, numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = resta(numero1, numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = division(numero1, numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicacion(numero1, numero2)
    alert(`Tu resultado es ${resultado}`);
}
else {
    alert("No se ha encontrado la operacion");
}