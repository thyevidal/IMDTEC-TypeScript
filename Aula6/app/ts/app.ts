import { Terrestre } from "./terrestre";
import { Transporte } from "./transporte";

let caminhao  = new Terrestre()
let transporte = new Transporte()

caminhao.capacidade = 14;
caminhao.numRodas = 6;

caminhao.showinfo()
