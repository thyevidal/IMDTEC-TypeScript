var Carro = /** @class */ (function () {
    function Carro() {
    }
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
var c = new Carro();
c.cor = "prata";
console.log(c.cor);
//c.setcor("Azul");
//console.log(c.getcor());
