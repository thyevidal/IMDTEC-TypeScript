"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direcao_1 = require("./direcao");
var motor_1 = require("./motor");
var veiculo_1 = require("./veiculo");
//let corolla = new Carro( "Toyota", "Corolla", "Preto", "OJV-6661", 3);
//corolla.showinfo()
//corolla.numPortas = -1;
//corolla.placa = "ABD-4321"
//corolla.modelo = "XRS"
//console.log(corolla.fabricante)
//console.log(corolla.numPortas);
//console.log(corolla.placa);
//console.log(corolla.modelo);
var gol = new veiculo_1.Veiculo(1000);
console.log(gol.motor.potencia);
var motor = new motor_1.Motor(2000);
var CorVolante = new direcao_1.Direcao();
gol.direcao = CorVolante;
gol.direcao.cor = "Café";
gol.motor = motor;
console.log("Motor = ".concat(gol.motor.potencia, "cc e Dire\u00E7\u00E3o de cor ").concat(gol.direcao.cor));
