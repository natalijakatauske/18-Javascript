console.log('labas')

// Sukurkite konstruktoriaus funkciją iur klase "Person" (naudokite ES5),
//kuri sukuria objektus su 3 metodais:
// name() - priima varda ir ji grazina: 'mano vardas: irasytas_vardas'.
// nameLastname() - priima varda tarkim 'Rokas' ir pavarde tarkim 'Rokevicius'
//ir grazina: 'Rokas Rokevicius' (abu pasiduoda atskirai).
// age() - priima amziu ir grazina: 'mano amzius: irasytas_amzius';



// Pirmas variantas

// function Person(name, nameLastname, age) {
//     this.irasytas_vardas = name
//     this.nameLastname = nameLastname
//     this.irasytas_amzius = age
// }

// console.log(Person)

// const petras = new Person("Petras", "Petraitis", 50)

// console.log(petras)
// console.log('Mano vardas yra ' + petras.irasytas_vardas)
// console.log('Man ' + petras.irasytas_amzius + ' metu.')



// Antras variantas

// function Person(name, surname, age) {
//     this.name = function() {
//         return 'Mano vardas yra ' + name
//     }
//     this.nameLastname = function() {
//         return 'Mano pavarde yra ' + surname
//     }
//     this.age = function() {
//         return 'Man ' + age + ' metu'
//     }
// }
// const petras = new Person('Petras', 'Petraitis', 50)
// console.log(petras.name(), petras.nameLastname(), petras.age())



// Trecias variantas

class Person {
    constructor(name, surname, age) {
        this.name = name 
        this.surname = surname
        this.age = age
    }
    first () {
        return 'Mano vardas yra ' + this.name
    }
    nameLastname() {
        return this.name + " " + this.surname
    }
    myAge() {
        return 'Man ' + this.age + ' metu'
    }
}
const johny = new Person('Johny', 'Depp', 50)
console.log(johny.first())
console.log(johny.nameLastname())
console.log(johny.myAge())