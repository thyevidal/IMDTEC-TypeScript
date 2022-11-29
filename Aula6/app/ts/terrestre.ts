import { Transporte } from "./transporte";

export class Terrestre extends Transporte{
    private _numRodas: number;

    public get numRodas() : number {
        return this._numRodas;
    }
    
    public set numRodas(numRodas : number) {
        this._numRodas = numRodas;
    }

    public showinfo(){
        console.log(`
            -------- info --------
             Capacidade: ${this.capacidade} tons
             Numero de rodas: ${this._numRodas}
            ----------------------
        `)
    }
     
}