class Person{
    #name;
    #age;
    #id;
    #gender;
    #weight;
    #height;
    #birth;
    constructor(nameParam, ageParam, idParam, genderParam, weightParam, heightParam, nacParam){
        this.#name = nameParam;
        this.#age = ageParam;
        this.#id = idParam;
        this.#gender = genderParam;
        this.#weight = weightParam;
        this.#height = heightParam;
        this.#birth = nacParam;
    }

    get name(){
        return this.#name;
    }
    set name(nameString){
        if (typeof nameString === "string" && nameString !== null) {
            this.#name = nameString;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get age(){
        return this.#age;
    }
    set age(ageInt){
        if (typeof ageInt === "number" && !isNaN(ageInt) && ageInt !== null) {
            this.#age = ageInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }
    
    get id(){
        return this.#id;
    }
    set id(idInt){
        if (typeof idInt === "number" && !isNaN(idInt) && idInt !== null) {
            this.#id = idInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get gender(){
        return this.#gender;
    }
    set gender(genderString){
        if (typeof genderString === "string" && genderString !== null) {
            this.#gender = genderString;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get weight(){
        return this.#weight;
    }
    set weight(weightInt){
        if (typeof weightInt === "number" && !isNaN(weightInt) && weightInt !== null) {
            this.#weight = weightInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get height(){
        return this.#height;
    }
    set height(heightInt){
        if (typeof heightInt === "number" && !isNaN(heightInt) && heightInt !== null) {
            this.#height = heightInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get birth(){
        return this.#birth;
    }
    set birth(birthInt){
        if (typeof birthInt === "number" && !isNaN(birthInt) && birthInt !== null) {
            this.#birth = birthInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    mostrarGeneracion(){

        if (this.birth > 1993 && this.birth < 2011) {
            document.write(`${this.name} pertenece a la <strong>Generacion Z</strong><br>
                                Su rasgo caracteristico es la <strong>Irreverencia</strong>.<br>`);
        }
        if (this.birth > 1980 && this.birth < 1994) {
            document.write(`${this.name} pertenece a la <strong>Generacion Y</strong><br>
                                Su rasgo caracteristico es la <strong>Frustración</strong>.<br>`);
        }
        if (this.birth > 1968 && this.birth < 1981) {
            document.write(`${this.name} pertenece a la <strong>Generacion X</strong><br>
                                Su rasgo caracteristico es la <strong>Obsesión por el éxito</strong>.<br>`);
        }
        if (this.birth > 1948 && this.birth < 1969) {
            document.write(`${this.name} pertenece a la generación <strong>Baby Boom</strong><br>
                                Su rasgo caracteristico es la <strong>Ambición</strong>.<br>`);
        }
        if (this.birth > 1929 && this.birth < 1949) {
            document.write(`${this.name} pertenece a la <strong>Silent Generation (niños posguerra)</strong><br>
                                Su rasgo caracteristico es la <strong>Austeridad</strong>.<br>`);
        }
       
    }
    esMayorDeEdad(){
        if (this.age > 17) {
            document.write("Es mayor de edad<br>");
        }else{
            document.write("Es menor de edad<br>");
        }
    }
    mostrarDatos(){
        switch (this.gender) {
            case "H":
            case "h":
                this.gender = "Hombre";
                break;
            case "M":
            case "m":
                this.gender = "Mujer";
                break;
        
            default:
                break;
        }
        document.write(`Tiene ${this.age} años<br>
                        Su D.N.I. es ${this.id}<br>
                        Sexo ${this.gender}<br>
                        Peso ${this.weight}kg<br>
                        Altura ${this.height}<br>
                        Año de nacimiento ${this.birth}<br>`)
    }

}

const generarDNI = ()=> {
    return Math.floor((Math.random() * (50000000 - 10000000 + 1) + 10000000));
}

const persona = new Person();

persona.name = prompt("Ingrese un nombre:");
persona.age = parseInt(prompt("Ingrese una edad: "));
persona.id = parseInt(prompt("D.N.I. (sin puntos): "));
persona.gender = (prompt("Sexo (H hombre, M mujer): "));
persona.weight = parseFloat(prompt("Ingrese un peso: "));
persona.height = parseFloat(prompt("Ingrese una altura: "));
persona.birth = parseInt(prompt("Ingrese una fecha de nacimiento: "));

persona.mostrarGeneracion();
persona.mostrarDatos();
document.write(`D.N.I. random: ${generarDNI()}`);
console.log(persona);