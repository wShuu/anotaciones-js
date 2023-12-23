//Anotaciones JavaScript #8
//Remueve los "//" para los demás resultados en consola

//POO (Programación Orientada a Objetos):

class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y mi color es ${this.color}`;
    }
    verInfo(){
       console.log(this.info) 
    }
    //Polimorfismo(Capacidad que tienen los objetos para comportarse distinto por sus propiedades):
    ladrar(){
        if (this.especie == "perro") {
            console.log("¡Waw!");
        } else {
            console.log("No puede ladrar, ya que es un " + this.especie);
        }
    }
}

//Herencia:
class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color,);
        this.raza = raza;
    }
}

let perro = new Perro("perro", 4, "blanco", "doberman");
let gato = new Animal("gato", 3, "negro");
let pajaro = new Animal("palomo", 2, "gris");

//perro.verInfo();
//gato.verInfo();
//pajaro.verInfo();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();
