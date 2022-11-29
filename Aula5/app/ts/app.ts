import { Carro } from './carro';
import { Direcao } from './direcao';
import { Motor } from './motor';
import { Veiculo } from './veiculo';

//let corolla = new Carro( "Toyota", "Corolla", "Preto", "OJV-6661", 3);

//corolla.showinfo()

//corolla.numPortas = -1;
//corolla.placa = "ABD-4321"
//corolla.modelo = "XRS"

//console.log(corolla.fabricante)
//console.log(corolla.numPortas);
//console.log(corolla.placa);
//console.log(corolla.modelo);

let gol = new Veiculo(1000);

console.log(gol.motor.potencia)

let motor = new Motor(2000);
let CorVolante = new Direcao();

gol.direcao = CorVolante;
gol.direcao.cor = "Café"
gol.motor = motor;


console.log(`Motor = ${gol.motor.potencia}cc e Direção de cor ${gol.direcao.cor}`);