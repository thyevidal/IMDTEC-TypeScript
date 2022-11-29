"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brinquedo = void 0;
var Brinquedo = /** @class */ (function () {
    function Brinquedo(velocidade) {
        this.velocidade = velocidade;
    }
    Brinquedo.prototype.mover = function () {
        console.log("Mover brinquedo...");
    };
    return Brinquedo;
}());
exports.Brinquedo = Brinquedo;
