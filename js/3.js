class Rectangulo{
    #alto;
    #ancho;
    constructor(nombreParam, altoParam , anchoParam){
        this.nombre = nombreParam;
        this.#alto = altoParam;
        this.#ancho = anchoParam;
    }

    get alto(){
        return this.#alto;
    }
    get ancho(){
        return this.#ancho;
    }

    set alto(altoPositivo){
        if (altoPositivo > 1 && !isNaN(altoPositivo)) {
            this.#alto = altoPositivo;
        }else{
            alert("Ingrese un valor correcto")
        }
    }
    set ancho(anchoPositivo){
        if (anchoPositivo > 1 && !isNaN(anchoPositivo)) {
            this.#ancho = anchoPositivo;
        }else{
            alert("Ingrese un valor correcto")
        }
    }

    calcularPerimetro() {
        return 2 * (this.#alto + this.#ancho);
    }

    calcularArea() {
        return this.#alto * this.#ancho;
    }
  
    mostrarInformacion() {
        document.write(`Nombre: ${this.nombre} <br>`);
        document.write(`Alto: ${this.#alto} <br>`);
        document.write(`Ancho: ${this.#ancho} <br>`);
        document.write(`Perímetro: ${this.calcularPerimetro()} <br>`);
        document.write(`Área: ${this.calcularArea()} <br>`);
    }
}

const nombre = prompt("Ingrese nombre del rectangulo");
const alto = parseInt(prompt("Ingrese el alto del rectangulo:"));
const ancho = parseInt(prompt("Ingrese el ancho del rectangulo:"));
const rectangle = new Rectangulo(nombre, alto, ancho);
rectangle.mostrarInformacion();
