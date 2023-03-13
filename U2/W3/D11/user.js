

class User {
constructor(name, surname, agex, location) {
    this.firstName = name;
    this.lastName = surname;
    this.age = agex;
    this.location = location;



    }
}

const mauroS = new User ("Mauro", "Simoni", 41, "Veneto")
console.log(mauroS)

const gabryC = new User ("Gabriele", "Cuscina", 21, "Messina")
console.log(gabryC)

function AgeVerification(){

    const mauroS = new User ("Mauro", "Simoni", 41, "Veneto");

    const gabryC = new User ("Gabriele", "Cuscina", 21, "Messina");



    if(gabryC.age < mauroS.age){
        return console.log(gabryC.firstName + " è piu giovane di " + mauroS.firstName)
    }else{
        return console.log(gabryC.firstName + " è piu vecchio di " + mauroS.firstName)
    }


}

AgeVerification()