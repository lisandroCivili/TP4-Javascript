class Contacts {
  #name;
  #phoneNumber;
  constructor(nameParam, phoneNUmberParam) {
    this.#name = nameParam;
    this.#phoneNumber = phoneNUmberParam;
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

  get phoneNumber() {
    return this.#phoneNumber;
  }
  set phoneNumber(phoneNumberInt) {
    if (typeof phoneNumberInt === "number" && !isNaN(phoneNumberInt) && phoneNumberInt !== null) {
      this.#phoneNumber = phoneNumberInt;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  añadirContacto(name, number){
    
  }
}
