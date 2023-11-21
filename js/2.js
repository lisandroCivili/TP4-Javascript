let confirmacion;

const cuenta = {
    titular: "Lisandro Civili",
    saldo: 0,

    ingresar: function(deposito){
        if (deposito > 0 && !isNaN(deposito)) {
            this.saldo += deposito;
        }else{
            alert("Agregue un importe valido");
        }
    },

    extraer: function(extraccion){
        if (extraccion > this.saldo) {
            alert("El monto excede el saldo disponible");
        }else if(extraccion > 0 && !isNaN(extraccion)){
            this.saldo -= extraccion;
        }else{
            alert("Agregue un importe valido");
        }
    },

    informar: function(){
        alert(`El saldo actual es $${this.saldo}`)
    }
}

do {
    
    let deposito = 0;
    let extraccion = 0;

    const opciones = parseInt(prompt(`Bievenido ${cuenta.titular}\nIngrese una opcion: 1-Depositar dinero. 2-Extraer dinero. 3-Consultar saldo.`))
    switch (opciones) {
        case 1:
            deposito = parseInt(prompt("Ingrese el importe a depositar: "));
            cuenta.ingresar(deposito);
            break;
        case 2:
            extraccion = parseInt(prompt("Ingrese el importe a extraer: "));
            cuenta.extraer(extraccion);
            break;
        case 3:
            cuenta.informar();
            break;
        default:
            alert("Ingrese una opción valida")
            break;
    }
    
    confirmacion = confirm("¿Desea realizar otra operación?");
    
} while (confirmacion !== false);