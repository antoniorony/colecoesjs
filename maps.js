class Maps {
    
    constructor() {
        let usuarios = new Map();
        usuarios.set('Luiz', 'Admin');
        usuarios.set('Stephany', 'Admin');
        usuarios.set('Jorge', 'User');
        usuarios.set('Natália', 'Admin');

        console.log(this.getAdmins(usuarios));
    }

    getAdmins(map) {
        let admins = [];
        map.forEach((element, i) => {
            if (element == 'Admin') {
                admins.push(i);
            } else {
                return null;
            }
        });
        
        return admins;
    }

    
}

new Maps();