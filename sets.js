class Sets {

    constructor() {
        const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

        console.log(this.valoresUnicos(meuArray));
    }

    valoresUnicos(arr) {
      return [...new Set(arr)];  
    }

}

new Sets();