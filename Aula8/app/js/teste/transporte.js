"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporte = void 0;
var Transporte = /** @class */ (function () {
    function Transporte() {
    }
    Object.defineProperty(Transporte.prototype, "capacidade", {
        get: function () {
            return this._capacidade;
        },
        set: function (capacidade) {
            this._capacidade = capacidade;
        },
        enumerable: false,
        configurable: true
    });
    Transporte.prototype.showinfo = function () {
        console.log("\n            -------- info --------\n             Capacidade: ".concat(this._capacidade, " ton's"));
    };
    return Transporte;
}());
exports.Transporte = Transporte;
