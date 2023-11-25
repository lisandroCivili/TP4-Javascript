class Person {
  #name;
  #age;
  #profession;
  constructor(nameParam, ageParam, professionParam) {
    this.#name = nameParam;
    this.#age = ageParam;
    this.#profession = professionParam;
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

  get profession() {
    return this.#profession;
  }
  set profession(professionString) {
    if (typeof professionString === "string" && professionString !== null) {
      this.#profession = professionString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  saludar(){
    document.write(`Hola ${this.name}, ¿como te va en tu trabajo de ${this.profession}?<br>`);
  }
  despedirse(){
    document.write(`Tus ${this.age} estuvieron muy divertidos, hasta luego!<br><br>`);
  }
}

const persona = new Person();
const persona2 = new Person();

persona.name = "Lisandro";
persona.age = 23;
persona.profession = "Programador";

persona2.name = "Victoria";
persona2.age = 19;
persona2.profession = "Odontologa";

persona.saludar();
persona.despedirse()

persona2.saludar();
persona2.despedirse()