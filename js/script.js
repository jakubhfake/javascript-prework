function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyczki';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);


let argPlayerMove = getMoveName(playerInput);
console.log('dane do display ' + argPlayerMove);
/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
}
else if (playerInput == '3'){
        playerMove = 'nożyczki';
}
else {
    playerMove = 'nieznany ruch';
}
*/
printMessage('Twój ruch to: ' + argPlayerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
    computerMove = 'papier';
}
else if (randomNumber == 3){
    computerMove = 'nożyczki';
}
else {
    computerMove = 'nieznany ruch';
}*/
printMessage('Ruch Bota to: ' + argComputerMove);
printMessage('Bot zagrał ' + argComputerMove + ' a Ty ' + argPlayerMove);

printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

function displayResult(argPlayerMove){
    
      if(argPlayerMove == 2){
      printMessage('Ty wygrywasz!');
    
    }
}
/*function displayResult(argComputerMove, argPlayerMove) {
    console.log('displayResult');
    printMessage('Bot zagrał ' + argComputerMove + ' a Ty ' + argPlayerMove);

 /*if( argComputerMove == 'kamień' && argPlayerMove == 'papier' ){
        printMessage('Ty wygrywasz!');
      }
      else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyczki'){
        printMessage('Wygrywa Bot!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Wygrywa Bot!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'nożyczki'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'nożyczki' && argPlayerMove == 'papier'){
        printMessage('Wygrywa Bot!');
      }
      elseif( argComputerMove == argPlayerMove ){
        printMessage('Jest remis, graj dalej!!!');
      }
    else {
        printMessage('Wynik gry to : Neznany ruch gracza, graj dalej!!!');
        return 'nieznany ruch';
      }
}*/
console.log('funkcja ' + displayResult);

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'kamień' && playerMove == 'nożyczki'){
    printMessage('Wygrywa Bot!');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywa Bot!');
  }
  else if( computerMove == 'papier' && playerMove == 'nożyczki'){
    printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'nożyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'nożyczki' && playerMove == 'papier'){
    printMessage('Wygrywa Bot!');
  }
else if( computerMove == playerMove){
    printMessage('Jest remis, graj dalej!!!');
  }
else {
    printMessage('Wynik gry to : Neznany ruch gracza, graj dalej!!!');
  }*/