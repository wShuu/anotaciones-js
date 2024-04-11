//Anotaciones JavaScript #9

class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            console.log("celular prendido");
            this.encendido = true;
        } else {
            console.log("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            console.log("reiniciando celular");
        } else {
            console.log("el celular esta apagado");
        }
    }
    tomarFoto(){
        console.log(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        console.log(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        color:${this.color}
        peso:${this.peso}
        tamaño:${this.tamaño}
        resolucion de video:${this.resolucionDeCamara}
        memoria ram:${this.memoriaRam} 
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        console.log("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        console.log("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}

celular1 = new Celular("rojo","150g","5p","full hd","2GB");
celular2 = new Celular("negro","200g","5.4p","hd","1GB");
celular3 = new Celular("blanco","300g","5.9p","full hd","2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo", "130g", "5.2", "4kg", "3GB", "full hd");
celular2 = new CelularAltaGama("negro", "142g", "6", "4kg", "4GB", "full hd");

console.log(`
    ${celular1.infoAltaGama()}
    ${celular2.infoAltaGama()}
    `)