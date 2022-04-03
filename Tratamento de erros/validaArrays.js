class ValidaArrays{

    constructor(){
        
        this.validarArray([0, 1, 2, 3, 4], 5);
    }

    validarArray(arr, num) {
        try {
            if (!arr && !num) throw new ReferenceError("Envie os parâmetros.");

            if (typeof arr != 'object') throw new TypeError("Array precisa ser do tipo object");
            
            if (typeof num != 'number') throw new TypeError("Numero precisa ser do tipo Number");

            if(arr.length !== num) throw new RangeError("Tamanho é inválido!");

            return arr;

        } catch (error) {
            if (error instanceof ReferenceError) {
                console.log("Este erro é um ReferenceError");                
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack);
            } else if (error instanceof TypeError) {
                console.log("Este erro é um TypeError");                
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack);
            } else if (error instanceof RangeError) {
                console.log("Este erro é um RangeError");                
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack);
            } else {
                console.log("Erro inesperado");
            }
        }
    }
}

new ValidaArrays();