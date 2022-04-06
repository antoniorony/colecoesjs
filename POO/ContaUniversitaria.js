class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
       
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada";
        }

        this._saldo = this._saldo -valor;
    }
}