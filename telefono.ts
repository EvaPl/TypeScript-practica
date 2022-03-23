export class telefono{
    private _tipo: string;
    public get tipo() {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    private _numero: number;
    public get numero(): number{
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    constructor(tipo: string, nuemro: number) {
        this._tipo = tipo;
        this._numero = nuemro;
    }
}