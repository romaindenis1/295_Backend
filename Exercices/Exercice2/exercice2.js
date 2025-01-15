/**
 * Vous devez constuire un tableau contenant tous les jours où la temperature est >= à 35 degrés
 */

const weatherData = [
  { date: "01-01-2021", temperature: 30 },
  { date: "01-02-2021", temperature: 35 },
  { date: "01-03-2021", temperature: 40 },
  { date: "01-04-2021", temperature: 38 },
];

// Solution utilisant le paradigme procédurale
// A VOUS DE COMPLETER ICI

// Solution utilisant le paradigme fonctionnel
// A VOUS DE COMPLETER ICI

for (i = 0; i < weatherData.length; i++) {
  if (weatherData[i].temperature >= 35) {
    console.log(weatherData[i]);
  }
}

// Les jours de canicules sont : 01-02-2021,01-03-2021,01-04-2021

//Solutions possibles
// La mienne
// const hotdays = weatherdata.filter(day => day.temperature >= 35);
