let totalCajero = 0;
let documento, psswd;
let mensaje = "";
let cajero = false;
let cantidad;

let users = [
    admin = {
        nombre: "Pepe Perez",
        cc: "12345",
        contraseña: "administrador",
        tipoUsuario: "Administrador"
    },

    client = {
        nombre: "Pepita Perez",
        cc: "6789",
        contraseña: "cliente",
        tipoUsuario: "Cliente",
        retiro(cantidad) {
            this.totalCajero = this.totalCajero - cantidad;
        }
    }
]

let billetes = [
    cinco = {},
    diez = {},
    veinte = {},
    cincuenta = {},
    cien = {}
]

while ((documento != admin.cc && psswd != admin.contraseña) || (documento != client.cc && psswd != client.contraseña)) {

documento = prompt("Por favor ingrese el número de documento");
psswd = prompt("Ingrese contraseña");

if (documento === admin.cc && psswd === admin.contraseña) {
    do {
        mensaje = prompt("¿Desea ingresar dinero: y/n?")
        if (mensaje === "y") {
            cajero = true;

            let cantCinco = parseInt(prompt("Ingrese la cantidad de billetes de 5.000 COP"));
            cinco['cantidad'] = cantCinco;

            let totalCinco = cantCinco * 5000;
            console.log("La suma total de billetes de 5.000 es " + totalCinco + " y el total de billetes son: " + cantCinco);

            let cantDiez = parseInt(prompt("Ingrese la cantidad de billetes de 10.000 COP"));
            diez['cantidad'] = cantDiez;

            let totalDiez = cantDiez * 10000;
            console.log("La suma total de billetes de 10.000 es " + totalDiez + " y el total de billetes son: " + cantDiez);

            let cantVeinte = parseInt(prompt("Ingrese la cantidad de billetes de 20.000 COP"));
            diez['cantidad'] = cantVeinte;

            let totalVeinte = cantVeinte * 20000;
            console.log("La suma total de billetes de 20.000 es " + totalVeinte + " y el total de billetes son: " + cantVeinte);

            let cantCincuenta = parseInt(prompt("Ingrese la cantidad de billetes de 50.000 COP"));
            cincuenta['cantidad'] = cantCincuenta;

            let totalCincuenta = cantCincuenta * 50000;
            console.log("La suma total de billetes de 50.000 es " + totalCincuenta + " y el total de billetes son: " + cantCincuenta);

            let cantCien = parseInt(prompt("Ingrese la cantidad de billetes de 100.000 COP"));
            cien['cantidad'] = cantCien;

            let totalCien = cantCien * 100000;
            console.log("La suma total de billetes de 100.000 es " + totalCien + " y el total de billetes son: " + cantCien);

            let totalGeneral = totalCinco + totalDiez + totalVeinte + totalCincuenta + totalCien;

            totalCajero += totalGeneral;

            console.log("El total general es: " + totalGeneral);
            console.log("Total cajero: "+totalCajero);
        } else {
            cajero = false;
        }
    } while (cajero === true);

} else if (documento === client.cc && psswd === client.contraseña) {
    cantidad = prompt("¿Cuánto dinero desea retirar?")
    if (cantidad <= totalCajero) {
        console.log("La cantidad disponible es: " + totalCajero + " en billetes de: " + Object.values(billetes));
        // console.log(Object.values(billetes));
        // console.log(client.retiro());
        totalCajero = totalCajero-cantidad;
        console.log("Su retiro fue de: "+cantidad+" en el cajero queda: "+totalCajero);

    } else {
        console.log("Cajero en mantenimiento, vuelva pronto");
    }
} else {
    console.log("El usuario no existe");
}
}
