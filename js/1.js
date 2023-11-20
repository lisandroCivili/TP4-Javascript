const auto = {
    color: "Rojo",
    marca: "Volkswagen",
    modelo: 2023,
    encendido: false,

    motorEncendido: function(){
        document.write(`<h1>El auto ${this.marca} está encendido.</h1>`)
    },
    motorApagado: function(){
        document.write(`<h1>El auto ${this.marca} está apagado.</h1>`)
    }
}

auto.motorEncendido();
auto.motorApagado();