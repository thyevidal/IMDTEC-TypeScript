"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var terrestre_1 = require("./terrestre");
var transporte_1 = require("./transporte");
var caminhao = new terrestre_1.Terrestre();
var transporte = new transporte_1.Transporte();
caminhao.capacidade = 14;
caminhao.numRodas = 6;
caminhao.showinfo();
