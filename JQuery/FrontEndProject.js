var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(coldIndex) {
  var colorReport = returnColor(5, colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row;
    }
  }
}

function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}
