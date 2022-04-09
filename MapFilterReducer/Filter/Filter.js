class UsandoFilter {

    constructor() {
        const numeros = [1, 25, 10, 45, 19, 12];
        console.log(this.filtrarPares(numeros));
        console.log(this.filtrarImpares(numeros));

    }

    filtrarPares(arr){
        return arr.filter((elemento)=>{
            return elemento % 2 === 0;
        });
    }

    filtrarImpares(arr){
        return arr.filter((elemento)=>{
            return elemento % 2 !== 0;
        });
    }

}

new UsandoFilter();