let computerMove = `kamień`;
let playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to' + playerMove + ', to wygrywasz!');

let randomFraction1 = Math.random();
let randomFraction2 = Math.random();
let randomFraction3 = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction1);
printMessage('Wylosowany ułamek to: ' + randomFraction2);
printMessage('Wylosowany ułamek to: ' + randomFraction3);

let calculation1 = randomFraction1 * 3 + 1;
let calculation2 = randomFraction2 *7 + 10;
let calculation3 = randomFraction3 * 2;

let roundNumber1 = Math.floor(calculation1);
let roundNumber2 = Math.floor(calculation2);
let roundNumber3 = Math.floor(calculation3);

let calculation = roundNumber1 + roundNumber2 * roundNumber3;

printMessage('Zbiór 1 do 3 Ułamek pomnożony przez 3 i powiększony o 1: ' + roundNumber1);
printMessage('Zbioór od 10 do 18 Ułamek pomnożony przez 7 i powiększony o 10: ' + roundNumber2);
printMessage('Liczba do zerowania przedziału 11 do 19 Ułamek pomnożony przez 2: ' + roundNumber3);
printMessage('Liczba wylosowana ze zbioru od 1 do 3 i od 11 do 19: ' + calculation);
