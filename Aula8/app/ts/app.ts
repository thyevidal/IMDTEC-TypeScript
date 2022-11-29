// import { Aviao } from "./teste2/aviao";
// import { Barco } from "./teste2/barco";
// import { Brinquedo } from "./teste2/brinquedo";

import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";

// let brinquedo = new Brinquedo(100);
// let aviao = new Aviao(900);
// let barco = new Barco(300);

// function movimentarBrinquedo(b: Brinquedo){
//     b.mover();
// }

// //movimentarBrinquedo(brinquedo);
// movimentarBrinquedo(aviao);

let carro1 = new Carro("Ford", "Ka", "Vermelho", 1000, "ASD-0909", 4);
let carro2 = new Carro("Fiat", "Mobi", "Branco", 1000, "QWE-9878");
let moto1 = new Moto("Honda", "CB 650R", "Preto", "YUI-7676", 650);
let moto2 = new  Moto("Yamaha", "Xmax 250", "Azul", "TRE-6655", 250);

// carro1.showinfo();
// carro2.showinfo();
// moto1.showinfo();
// moto2.showinfo();

let listaVeiculos: Veiculo[] = [carro1, carro2, moto1, moto2];

// for (let i = 0; i < listaVeiculos.length; i++){
//     let veic:Veiculo = listaVeiculos[i];

//     if(veic instanceof Carro){
//         console.log(`Modelo do Carro: ${veic.modelo}`)
//     }else if(veic instanceof Moto){
//         console.log(`Modelo da Moto: ${veic.modelo}`)
//     }
// }

listaVeiculos
    .filter(v => v instanceof Carro)
    .forEach(v => console.log(`Carro: ${v.modelo}`))