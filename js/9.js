class Animal {
  #name;
  #age;
  constructor(nameParam, ageParam) {
    this.#name = nameParam;
    this.#age = ageParam;
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

  get age() {
    return this.#age;
  }
  set age(ageInt) {
    if (typeof ageInt === "number" && !isNaN(ageInt) && ageInt !== null) {
      this.#age = ageInt;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  makeSound() {
    document.write("-Sonido de animal-");
  }
}

class Dog extends Animal {
  constructor(nameParam, ageParam) {
    super(nameParam, ageParam);
  }
  makeSound() {
    document.write("Guau Guau<br>");
  }
}

class Cat extends Animal {
  constructor(nameParam, ageParam) {
    super(nameParam, ageParam);
  }
  makeSound() {
    document.write("Miau Miau<br>");
  }
}

const perro = new Dog("puri", 10);
const gato = new Cat("afrika", 10);

perro.makeSound();
gato.makeSound();