class UsarReduce {

    constructor() {
        const numeros = [1, 2, 3, 5, 10, 25, 80, 1025, 105, 107, 7];
        console.log(this.somarNumeros(numeros));

        const lista = [
            {
                name: 'sabao',
                preco: 30,
            },
            {
                name: 'toalha',
                preco: 50,
            },
            {
                name: 'cereal',
                preco: 10,
            }

        ];

        const saldo = 100;

        console.log(this.calcularSaldo(lista, saldo));
    }


    somarNumeros(arr) {
        return arr.reduce((previousValue, currentValue)=>{
            console.log(previousValue);
            console.log(currentValue);
            return previousValue + currentValue;
        })
    }

    calcularSaldo(lista, saldo) {
        return lista.reduce((prev, current)=>{
            return prev - current.preco;
        }, saldo);
    }

}

new UsarReduce();