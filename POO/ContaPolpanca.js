class ContaPolpanca extends ContaBancaria{
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'polpanca';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}