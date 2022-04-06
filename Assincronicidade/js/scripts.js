class ConsultaApi {

    constructor() {
        this._BASE_URL = 'https://thatcopy.pw/catapi/rest/';
        this.catBtn = document.getElementById('change-cat');
        this.catImg = document.getElementById('cat');
        this.loadImg();
        this.adicionarEventoClick();

    }

    async getCats() {
        try {
            let Headers = {
                'authority' : 'thatcopy.pw',
                'method':'GET',
                'referer': 'https://thatcopy.pw/catapi/rest/',
                'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'scheme': 'https',
                'tenant': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnQiOiJ0MTcifQ.6k1OOtrbmTy6_CHC6ji5OqmLqzHSYVRC9Q6b1rNlZtaxaucH1Xse4lLlNYcrURisW8wCRmD74tl11OypKOavOg'
            }

            const data = await fetch(this._BASE_URL, Headers);
            const json = await data.json();   
            
            return json.url;    
        } catch (error) {
            console.log(error);    
        }
        
    }

    async loadImg() {
        this.catImg.src = await this.getCats();
    }

    adicionarEventoClick() {
        this.catBtn.addEventListener('click', this.loadImg);
    }

}
