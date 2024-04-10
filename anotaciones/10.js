class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada === false) {
            this.instalada = true;
            console.log("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada === true) {
            this.instalada = false;
            console.log("app desinstalada correctamente");
        }
    }
    abrir(){
        if (this.iniciada === false && this.instalada === true) {
            this.iniciada = true;
            console.log("app encendida");
        }
    }
    cerrar(){
        if (this.iniciada === true && this.instalada === true) {
            this.iniciada = false;
            console.log("app cerrada");
        }
    }
    getApp() {
        console.log(`Propiedades:` + this.instalada)
    }
}

const getValue = () => {
    return console.log(miApp)
}


const miApp = new App();


miApp.instalar();
miApp.abrir();
miApp.cerrar();
miApp.desinstalar();
miApp.getApp();
getValue();