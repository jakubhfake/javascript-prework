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

let WynikGry = displayResult(argComputerMove, argPlayerMove);
printMessage('Wynik gry to ' + WynikGry);
    
function displayResult(argComputerMove, argPlayerMove) {
 if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'wygrywasz Ty!';
      }
      else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyczki'){
        return 'wygrywa Bot!';
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'wygrywa Bot!';
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'nożyczki'){
        return 'Ty wygrywasz!';
      }
      else if( argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
      }
      else if( argComputerMove == 'nożyczki' && argPlayerMove == 'papier'){
        return 'wygrywa Bot!';
      }
      else if( argComputerMove == argPlayerMove ){
        return 'mamy remis, graj dalej!!!';
      }
    else {
        printMessage('Graj dalej');
        return 'nieznany ruch gracza';
    }
}


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