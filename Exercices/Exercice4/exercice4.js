/**
 * Vous devez coder une fonction fléchée qui retourne l'animal (donc l'objet js)
 * qui a une menace (threat) de 5 unités.
 */

const animals = [
  { name: "frog", threat: 0 },
  { name: "monkey", threat: 5 },
  { name: "gorilla", threat: 8 },
  { name: "lion", threat: 10 },
];
// Solution utilisant le paradigme procédurale
// A VOUS DE COMPLETER ICI
let threats = [];

for (let index = 0; index <= animals.length - 1; index++) {
  if (animals[index].threat == 5) {
    console.log(animals[index]);
  }
}

// Solution utilisant le paradigme fonctionnel
// A VOUS DE COMPLETER ICI

// returns object - {name: "monkey", threat: 5}
