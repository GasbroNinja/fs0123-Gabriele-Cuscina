/*
class Pet {
  constructor(petname, ownerName1, species, breed) {
      this.petName = petname;
      this.ownerName1 = ownerName1;
      this.species = species;
      this.breed = breed;
  
      }
      static validation(own1,own2){
        return own1.ownerName1.toLowerCase() === own2.ownerName1.toLowerCase() ? true : false
      }
  }

const pet1 = new Pet ('colla', 'luigi', 'cane', 'meticcio');
const pet2 = new Pet ('pesto', 'luigi', 'cane', 'purosangue');

console.log(Pet.validation(pet1,pet2))
/*
const animals = []

document.addEventListener("DOMContentLoaded", (event) => {

    document.querySelector("#myForm").addEventListener('submit', (e) => {
        e.preventDefault()
        let formz = Object.fromEntries(new FormData(e.target).entries)
        let inputContent = document.querySelector("#owner1")
            inputContent.innerHTML = ''
        
        pet.push(new Pet(formz.petName,formz.ownerName1,formz.species,formz.breed));

      /*  for (const animal of animals) {
            inputContent.insertAdjacentElement("beforeend", ``)
        }
    });
})
*/


/*
const petsArr = []


let myForm = document.getElementById("myForm")

myForm.addEventListener("submit", event => {
    event.preventDefault();

    let petNamer =  document.getElementById("petNamer").value;
    let ownerNamer = document.getElementById("ownerNamer").value;
    let specie = document.getElementById("specie").value;
    let breeds = document.getElementById("breeds").value;
    
    document.getElementById("petNamer").value = "";
    document.getElementById("ownerNamer").value = "";
    document.getElementById("specie").value = "";
    document.getElementById("breeds").value = "";

    petsArr.push(new Pet(petNamer, ownerNamer, specie, breeds))

    let newList = document.querySelector("ol")
    newList.innerHTML = "";

    for (const pet of petsArr){
        let listcont = document.createElement("li")
        listcont.innerHTML = `Owner: ${pet.petName}, Pet: ${pet.ownerName1}, Species: ${pet.species}, Breed: ${pet.breed}`
        listcont.appendChild(newListd);
    }

})

*/

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const form = document.querySelector('form');
const petList = document.querySelector('#petList');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const petName = form.elements.petName.value;
    const ownerName = form.elements.ownerName.value;
    const species = form.elements.species.value;
    const breed = form.elements.breed.value;

    const pet = new Pet(petName, ownerName, species, breed);

    const li = document.createElement('li');
    li.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(li);

    form.reset();
});

