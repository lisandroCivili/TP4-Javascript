class Producto {
  #codigo;
  #precio;
  constructor(nombreParam, codigoParam, precioParam) {
    this.nombre = nombreParam;
    this.#codigo = codigoParam;
    this.#precio = precioParam;
  }

  get codigo() {
    return this.#codigo;
  }
  get precio() {
    return this.#precio;
  }
  set codigo(codigoEntero) {
    if (!isNaN(codigoEntero) && codigoEntero !== null) {
      this.#codigo = codigoEntero;
    } else {
      alert("Ingrese un valor correcto");
    }
  }
  set precio(precioEntero) {
    if (!isNaN(precioEntero) && precioEntero !== null) {
      this.#precio = precioEntero;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  mostrarDatos() {

        document.write(`Nombre: ${this.nombre}<br>
                                Codigo: ${this.codigo}<br>
                                Precio: $${this.precio}<br><br>`);

  }
}

const producto1 = new Producto("Pepsi", 10, 500);
const producto2 = new Producto("Coca-Cola", 12, 750);
const producto3 = new Producto("Sprite", 14, 650);

const productos = [producto1,producto2,producto3];
producto1.mostrarDatos()
producto2.mostrarDatos()
producto3.mostrarDatos()


