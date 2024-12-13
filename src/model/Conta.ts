export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;



    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }



    public get numero(): number {
        return this._numero;
    }


    public get agencia(): number {
        return this._agencia;
    }



    public get tipo(): number {
        return this._tipo;
    }



    public get titular(): string {
        return this._titular;
    }


    public get saldo(): number {
        return this._saldo;
    }


    public set numero(value: number) {
        this._numero = value;
    }


    public set agencia(value: number) {
        this._agencia = value;
    }


    public set tipo(value: number) {
        this._tipo = value;
    }


    public set titular(value: string) {
        this._titular = value;
    }


    public set saldo(value: number) {
        this._saldo = value;
    }


    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log("\n saldo insuficiente!")
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }


    public depositar(valor: number): void {
        this._saldo = this.saldo + valor;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "contata corrente";
                break;
            case 2:
                tipo = "conta poupança";
                break;

        }

        console.log("-----------------------------------------------");
        console.log("------------ dados da conta--------------------");
        console.log("-----------------------------------------------");
        console.log(" numero da conta: " + this._numero);
        console.log(" numero da agencia: " + this._agencia);
        console.log(" tipo da conta: " + tipo);
        console.log("titular: " + this._titular);
        console.log(" saldo: " + this._saldo.toFixed(2));
    }
}





