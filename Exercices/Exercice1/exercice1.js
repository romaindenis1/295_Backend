/**
 * Vous devez constuire un tableau contenant le carré de chaque entier présent dans le tableau 'numbers'
 */

let numbers = [1, 2, 3, 4, 5];

// Solution utilisant le paradigme procédurale

function procedurale (){
    let i = 0;
    let squaredNumbers = [];
    for (i = 0; i < numbers.length; i++)
        {
            squaredNumbers[i] = (numbers[i] * numbers[i]);
            console.log(squaredNumbers[i]);
        };
}

// Solution utilisant le paradigme fonctionelle

function fonctionnel (){
    const fonctionnelnumbers = numbers.map((x) => x * x);
    console.log(fonctionnelnumbers)
}

procedurale();
fonctionnel();
// [1, 4, 9, 16, 25]


// Solutions possibles procedurale
// la mienne premiere
// for (let number of numbers)
// squarednumbers.push (result)
// numbers.foreach => array[index] | modifie tableau de base | peut pas break

// Solutions possibles fonctionelle
// le mienne premiere
// 