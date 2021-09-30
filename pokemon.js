// El nombre de las clases debe ir la primera letra en MAYUSCULA. 
class Pokemon {

    #name = ' ';
    #type = ' ';
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    set name (name) {
        this.#name = name;
    }

    set type (type) {
        this.#type = type;
    }

    set evolutions (evolutions) {
        this.#evolutions = evolutions;
    }

    get name() {
        return this.#name
    }

    get type() {
        return this.#type
    }

    get evolutions() {
        return this.#evolutions
    }

    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        // Valida que la opcion exista
        const EVOLVE = this.#evolutions[evolution] || ' ';
        let messege = 'No puede evolucionar';

        if(EVOLVE) {
            messege = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        
        return messege;

    }
}

class TypeFire extends Pokemon {

    constructor(name, evolutions){
        super(name, 'fire', evolutions);
    }

    messege() {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const Charmander = new TypeFire('charmander', 'Fire', ["Charmeleon", "Charizar"])
console.log(Charmander.messege());















/* const Charmander = new Pokemon('Charmander', 'Fire', ["Charmeleon", "Charizar"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

console.log('----------------------------------------------');

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0)); */