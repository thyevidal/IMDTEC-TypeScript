export class Transporte{
    protected _capacidade : number;
    
    public get capacidade() : number {
        return this._capacidade;
    }

    public set capacidade(capacidade : number) {
        this._capacidade = capacidade;
    }
    
    public showinfo(){
        console.log(`
            -------- info --------
             Capacidade: ${this._capacidade} ton's`)
    }
    
}