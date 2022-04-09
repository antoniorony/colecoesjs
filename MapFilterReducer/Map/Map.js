class UsandoMap {

    constructor() {
        const maca = {
            value: 2,
        }

        const laranja = {
            value: 3,
        }

        const nums= [1, 2];

        console.log('maçã-> ', this.mapComThis(nums, maca));
        console.log('laranja-> ', this.mapComThis(nums, laranja));

        console.log('Map sem this ->', this.mapSemThis([2,4,5,7,8,10]));

        console.log(nums);
    }

    mapComThis(arr, thisArg) {
       return arr.map((item)=>{
           return (item * thisArg.value);
       }, thisArg) ;
    }

    mapSemThis(arr) {
       return arr.map((item)=>{
            return item*2;
        });
    }

}


new UsandoMap();

