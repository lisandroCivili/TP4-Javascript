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
        } else {
            alert("Ingrese un valor correcto");
        }
    }
    
    set ancho(anchoPositivo){
        if (anchoPositivo > 1 && !isNaN(anchoPositivo)) {
            this.#ancho = anchoPositivo;
        } else {
            alert("Ingrese un valor correcto");
        }
    }
    

    calcularPerimetro() {
        return 2 * (this.#alto + this.#ancho);
    }

    calcularArea() {
        return this.#alto * this.#ancho;
    }
  
    mostrarInformacion() {
        document.write(`Nombre: ${this.nombre} <br>
        Alto: ${this.#alto} <br>
        Ancho: ${this.#ancho} <br>
        Perímetro: ${this.calcularPerimetro()} <br>
        Área: ${this.calcularArea()} <br>`);
    }
}

const rectangle = new Rectangulo();
rectangle.nombre = prompt("Ingrese nombre del rectangulo");
rectangle.alto = parseInt(prompt("Ingrese el alto del rectangulo:"));
rectangle.ancho = parseInt(prompt("Ingrese el ancho del rectangulo:"));
console.log(rectangle)
rectangle.mostrarInformacion();
