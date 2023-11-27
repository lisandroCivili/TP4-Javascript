class Contactos {
  #nombre;
  #numero;
  constructor(nombreParam, numeroParam) {
    this.#nombre = nombreParam;
    this.#numero = numeroParam;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nombreString) {
    if (typeof nombreString === "string" && nombreString !== null) {
      this.#nombre = nombreString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  get numero() {
    return this.#numero;
  }
  set numero(numeroInt) {
    if (typeof numeroInt === "number" && !isNaN(numeroInt) && numeroInt !== null && numeroInt.length === 10) {
      this.#numero = numeroInt;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  
}
class Agenda{
  constructor(){
    this.capacidad = 10;
    this.listaContactos = [];
  }

  aniadirContacto(contactoNuevo){
    
    const chequeo = this.listaContactos.find(contactoExiste => contactoExiste.nombre === contactoNuevo.nombre);

    if (!chequeo) {
      if (this.listaContactos.length < this.capacidad) {
        
        this.listaContactos.push(contactoNuevo);
      }else{
        alert("Agenda llena, elimine algunos contactos para poder guardar nuevos.");
      }
    }else{
      alert("Este contacto ya existe");
    }

  }

  existeContacto(contactoNuevo){
    const chequeo = this.listaContactos.find(contactoExiste => contactoExiste.nombre === contactoNuevo);
    if (chequeo) {
      alert("El contacto se encuentra en la agenda.")
    }else{
      alert("El contacto no se encuentra en la agenda.")
    }
  }

  mostrarContactos(){
    for (let i = 0; i < this.listaContactos.length; i++) {
      document.write(`Nombre: ${this.listaContactos[i].nombre}<br>Celular: ${this.listaContactos[i].numero}<br><br>`)      
    }
  }

  buscarContacto(contactoBuscar){
    const chequeo = this.listaContactos.find(contactoBuscado => contactoBuscado.nombre === contactoBuscar);
    const indice = this.listaContactos.indexOf(chequeo);
    if (chequeo) {
      alert(`Nombre: ${this.listaContactos[indice].nombre}\nNumero: ${this.listaContactos[indice].numero}`);
    }else{
      alert("El contacto no se encuentra en la agenda.")
    }
  }

  eliminarContacto(contactoEliminar){
    const chequeo = this.listaContactos.find(contactoBuscado => contactoBuscado.nombre === contactoEliminar);
    const indice = this.listaContactos.indexOf(chequeo);
    if (chequeo) {
      this.listaContactos.splice(indice, 1);
      alert("Contacto borrado exitosamente")
    }else{
      alert("El contacto no se encuentra en la agenda.")
    }
  }

  agendaLlena(){
    if (this.listaContactos.length >= this.capacidad) {
      alert("Agenda llena.")
    }
  }

  huecosLibres(){
    if (this.listaContactos.length < this.capacidad) {
      alert(`Espacios restantes: ${this.capacidad - this.listaContactos.length}`)
    }else{
      alert("Agenda llena.");
    }
  }

}

const contacto1 = new Contactos("Lisandro Civili", 3816174315);
const contacto2 = new Contactos("Martina Gonzalez", 3813456680);
const contacto3 = new Contactos("Geronimo Gutierrez", 3813152847);
const contacto4 = new Contactos("Victoria Camacho", 3813680539);

const agenda = new Agenda();

agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);
agenda.aniadirContacto(contacto4);
agenda.agendaLlena();

let opcion;
do {
  opcion = parseInt(prompt("Menu\n1-Buscar contacto\n2-Verificar contacto\n3-Eliminar contacto\n4-Espacio libre"))
  
  switch (opcion) {
    case 1:
      agenda.buscarContacto(prompt("Buscar contacto:"));
      break;
    case 2:
      agenda.existeContacto(prompt("Verificar contacto existente:"));
      break;
    case 3:
      agenda.eliminarContacto(prompt("Eliminar contacto:"));
      break;
    case 4:
      agenda.huecosLibres();
      break;
  
    default:
      break;
  }
} while (opcion !== 0);

