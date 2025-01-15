/**
 * Vous devez faire la somme des entiers présent dans le tableau numbers
 */

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Solution utilisant le paradigme procédurale

for (let i = 0; i <= numbers.length - 1; i++) {
  sum += numbers[i];
}

// Solution utilisant le paradigme fonctionnel

// 0 is initial value
const sumfunc = numbers.reduce(
  (sumfunc, numbers) => sumfunc + numbers /* ,x if we aren't starting at 0 */
);

console.log("Final sum procedural: " + sum); // 15
console.log("Final sum functional: " + sumfunc); // 15
