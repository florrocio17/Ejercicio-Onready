class vehiculo {
    constructor(Marca, Modelo, Precio) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
    }
}
class Auto extends vehiculo {
    constructor(Marca, Modelo, Puertas, Precio, props) {
        super(props);
        this.Puertas = Puertas;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;

        console.log(  `Marca: ${this.Marca}// Modelo: ${this.Modelo}// Puertas: ${this.Puertas}// Precio: $${this.Precio.toFixed(2)}` );
    }
}
class Moto extends vehiculo {
    constructor(Marca, Modelo, Cilindrada, Precio, props) {
        super(props);
        this.Cilindrada = Cilindrada;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;

        console.log(`Marca: ${this.Marca}// Modelo: ${this.Modelo}// Cilindrada: ${this.Cilindrada}// Precio: $${this.Precio.toFixed(2)}` );
    }
}

function init() {
    datosArray = carga();
    console.log("=============================");
    masCaro(datosArray);
    masBarato(datosArray);
    letraY(datosArray);
    console.log("=============================");
    ordenamiento(datosArray);
}

init();

function carga() {
    const Peugeot206 = new Auto('Peugeot', '206', '4', 200000);
    const Honda = new Moto('Honda', 'Titan', '125c', 60000);
    const Peugeot208 = new Auto('Peugeot', '208', '5', 250000);
    const Yamaha = new Moto('Yamaha', 'YBR', '160c', 80500.50);
    return [Peugeot206, Honda, Peugeot208, Yamaha];
}

function masCaro(arr) { 
    let mayor = arr[0];
    arr.forEach(element => {
        if (element.Precio > mayor.Precio) {
            mayor = element;
        }
    });
    console.log(`Vehículo más caro: ${mayor.Marca} ${mayor.Modelo}`);
}

function masBarato(arr) {  
    let menor = arr[0];
    arr.forEach(element => {
        if (element.Precio < menor.Precio) {
            menor = element;
        }
    });
    console.log(`Vehículo más barato: ${menor.Marca} ${menor.Modelo}`);
}

function letraY(arr) {
    let vehiculoY;
    arr.forEach(element => {
        if (element.Modelo.includes('Y')) {
            vehiculoY = element;
        }
    });
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoY.Marca} ${vehiculoY.Modelo} $${vehiculoY.Precio.toFixed(2)}`);
}

function ordenamiento(arr) {//marca y modelo ordenados en un nuevo array
    nuevoArray = arr;
    nuevoArray.sort(function (a, b) {
        return b.Precio - a.Precio;
    });
    console.log("Vehículos ordenados por precio de mayor a menor:");
    arr.forEach(element => {
        console.log(`${element.Marca} ${element.Modelo}`);
    });
}

