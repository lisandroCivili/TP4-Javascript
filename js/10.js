class Airport {
  #airportName;
  constructor(airportNameParam) {
    this.#airportName = airportNameParam;
    this.airplanesList = [];
  }
  get airportName() {
    return this.#airportName;
  }
  set airportName(airportNameString) {
    if (typeof airportNameString === "string" && airportNameString !== null) {
      this.#airportName = airportNameString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  agregarAvion(airplane){
    if (!this.airplanesList.includes(airplane)) {
        this.airplanesList.push(airplane);
    }
  }

  buscarAvion(airplaneName) {
    const foundAirplane = this.airplanesList.find(airplane => airplane.name === airplaneName);

    if (foundAirplane) {
      document.write(
        `Nombre del avión: ${foundAirplane.name} \n Capacidad: ${foundAirplane.capacity} \n Destino: ${foundAirplane.destination}`
      );
    } else {
      alert("El avión ingresado no está registrado");
    }
  }
}

class Airplane{
    #name;
    #capacity;
    #destination;
    constructor(nameParam, capacityParam, destinationParam){
        this.#name = nameParam;
        this.#capacity = capacityParam;
        this.#destination = destinationParam;
        this.passengerList = [];
    }

    get name() {
        return this.#name;
    }
    set name(nameString) {
        if (typeof nameString === "string" && nameString !== null) {
            this.#name = nameString;
        } else {
            alert("Ingrese un valor correcto");
        }
    }

    get capacity() {
        return this.#capacity;
    }
    set capacity(capacityInt) {
        if (typeof capacityInt === "number" && !isNaN(capacityInt) && capacityInt !== null) {
            this.#capacity = capacityInt;
        } else {
            alert("Ingrese un valor correcto");
        }
    }

    get destination() {
        return this.#destination;
    }
    set destination(destinationString) {
        if (typeof destinationString === "string" && destinationString !== null) {
            this.#destination = destinationString;
        } else {
            alert("Ingrese un valor correcto");
        }
    }

    abordar(passenger){
        if (this.passengerList.length < this.capacity) {
            this.passengerList.push(passenger);
            alert(`El pasajero ${passenger} abordó.`)
        }else{
            alert("La capacidad del avión está al maximo");
        }
    }
}

const aeropuerto = new Airport("Termas de Rio Hondo");
const aeropuertoInternacional = new Airport("Ezeiza");

const avionNac1 = new Airplane("Fly Bondi", 5, "Tucuman");
let capAvionNac1 = avionNac1.capacity;
const avionNac2 = new Airplane("Aerolineas Argentinas", 8, "Bs As");
let capAvionNac2 = avionNac2.capacity;
const avionNac3 = new Airplane("Avioncin", 4, "Cordoba");
let capAvionNac3 = avionNac3.capacity;

const avionInternac1 = new Airplane("Vuela Vuela", 10, "Mexico");
let capAvionInternac1 = avionInternac1.capacity;
const avionInternac2 = new Airplane("International Fly", 14, "USA");
let capAvionInternac2 = avionInternac2.capacity;
const avionInternac3 = new Airplane("Fly Safe", 20, "España");
let capAvionInternac3 = avionInternac3.capacity;

do {
    avionNac1.abordar(prompt(`Avion ${avionNac1.name}, Capacidad ${capAvionNac1} pasajeros \nIngrese el nombre del pasajero`));
    capAvionNac1--
} while (capAvionNac1 > 0);
do {
    avionNac2.abordar(prompt(`Avion ${avionNac2.name}, Capacidad ${capAvionNac2} pasajeros \nIngrese el nombre del pasajero`));
    capAvionNac2--
} while (capAvionNac2 > 0);
do {
    avionNac3.abordar(prompt(`Avion ${avionNac3.name}, Capacidad ${capAvionNac3} pasajeros \nIngrese el nombre del pasajero`));
    capAvionNac3--
} while (capAvionNac3 > 0);

do {
    avionInternac1.abordar(prompt(`Avion ${avionInternac1.name}, Capacidad ${capAvionInternac1} pasajeros \nIngrese el nombre del pasajero`));
    capAvionInternac1--
} while (capAvionInternac1 > 0);
do {
    avionInternac2.abordar(prompt(`Avion ${avionInternac2.name}, Capacidad ${capAvionInternac2} pasajeros \nIngrese el nombre del pasajero`));
    capAvionInternac2--
} while (capAvionInternac2 > 0);
do {
    avionInternac3.abordar(prompt(`Avion ${avionInternac3.name}, Capacidad ${capAvionInternac3} pasajeros \nIngrese el nombre del pasajero`));
    capAvionInternac3--
} while (capAvionInternac3 > 0);

aeropuerto.agregarAvion(avionNac1);
aeropuerto.agregarAvion(avionNac2);
aeropuerto.agregarAvion(avionNac3);

aeropuertoInternacional.agregarAvion(avionInternac1);
aeropuertoInternacional.agregarAvion(avionInternac2);
aeropuertoInternacional.agregarAvion(avionInternac3);

const opcionAeropuerto = parseInt(prompt(`Ingrese una opcion numerica:\n
                                         1-Aeropuertos nacional Termas de Rio Hondo \n
                                         2-Aeropuertos internacional Ezeiza`));
switch (opcionAeropuerto) {
    case 1:
        aeropuerto.buscarAvion(prompt("Ingrese nombre del avion a buscar:"))
        break;
    case 2:
        aeropuertoInternacional.buscarAvion(prompt("Ingrese nombre del avion a buscar:"))
        break;

    default:
        break;
}                               

