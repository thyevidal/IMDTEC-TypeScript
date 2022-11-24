import { Carro } from './carro'

let c: Carro;
c = new Carro("fiesta", "Vermelho", "ABC-1212");

c.cor = "Vermelho"

let c2 = new Carro("Gol", "Brando");
c2.cor = "Branco"

console.log(`A cor do carro ${c.modelo} é ${c.cor} e tem ${c.numPortas} portas`);
console.log(`A cor do carro ${c2.modelo} é ${c2.cor} e tem ${c2.numPortas} portas`);
//console.log(c2.cor);