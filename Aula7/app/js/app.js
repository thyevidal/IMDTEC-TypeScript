"use strict";
// import { Aviao } from "./teste2/aviao";
// import { Barco } from "./teste2/barco";
// import { Brinquedo } from "./teste2/brinquedo";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
// let brinquedo = new Brinquedo(100);
// let aviao = new Aviao(900);
// let barco = new Barco(300);
// function movimentarBrinquedo(b: Brinquedo){
//     b.mover();
// }
// //movimentarBrinquedo(brinquedo);
// movimentarBrinquedo(aviao);
var carro1 = new carro_1.Carro("Ford", "Ka", "Vermelho", 1000, "ASD-0909", 4);
var carro2 = new carro_1.Carro("Fiat", "Mobi", "Branco", 1000, "QWE-9878");
var moto1 = new moto_1.Moto("Honda", "CB 650R", "Preto", "YUI-7676", 650);
var moto2 = new moto_1.Moto("Yamaha", "Xmax 250", "Azul", "TRE-6655", 250);
// carro1.showinfo();
// carro2.showinfo();
// moto1.showinfo();
// moto2.showinfo();
var listaVeiculos = [carro1, carro2, moto1, moto2];
// for (let i = 0; i < listaVeiculos.length; i++){
//     let veic:Veiculo = listaVeiculos[i];
//     if(veic instanceof Carro){
//         console.log(`Modelo do Carro: ${veic.modelo}`)
//     }else if(veic instanceof Moto){
//         console.log(`Modelo da Moto: ${veic.modelo}`)
//     }
// }
listaVeiculos
    .filter(function (v) { return v instanceof carro_1.Carro; })
    .forEach(function (v) { return console.log("Carro: ".concat(v.modelo)); });
