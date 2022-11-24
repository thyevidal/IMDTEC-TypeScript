class Carro{

    modelo: string;
    //cor: string;
    _cor:string;
    placa: string;
    numPortas: number;

    get cor():string {
        return this._cor;
    }

    set cor(cor: string) {
        this._cor = cor;
    }

}

let c = new Carro();
c.cor = "prata";
console.log(c.cor);
//c.setcor("Azul");
//console.log(c.getcor());