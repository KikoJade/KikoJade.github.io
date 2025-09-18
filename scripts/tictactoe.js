let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = 'X';
            document.getElementById(buttonId).style = 'color: #FFAAAA; background-color: #AA0000;'
        }
        else {
            document.getElementById(buttonId).innerHTML = 'O';
            document.getElementById(buttonId).style = 'color: #AAAAFF; background-color: #0000AA;'
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    document.getElementById('a1').innerHTML = "";
    document.getElementById('b1').innerHTML = "";
    document.getElementById('c1').innerHTML = "";
    document.getElementById('a2').innerHTML = "";
    document.getElementById('b2').innerHTML = "";
    document.getElementById('c2').innerHTML = "";
    document.getElementById('a3').innerHTML = "";
    document.getElementById('b3').innerHTML = "";
    document.getElementById('c3').innerHTML = "";

    xTurn = true;

    document.getElementById('a1').style = 'background-color: #DDCCFF'
    document.getElementById('b1').style = 'background-color: #DDCCFF'
    document.getElementById('c1').style = 'background-color: #DDCCFF'
    document.getElementById('a2').style = 'background-color: #DDCCFF'
    document.getElementById('b2').style = 'background-color: #DDCCFF'
    document.getElementById('c2').style = 'background-color: #DDCCFF'
    document.getElementById('a3').style = 'background-color: #DDCCFF'
    document.getElementById('b3').style = 'background-color: #DDCCFF'
    document.getElementById('c3').style = 'background-color: #DDCCFF'

    document.getElementById('winner').innerHTML = "";
}

function checkWin() {
    let a1 = document.getElementById('a1').innerHTML;
    let b1 = document.getElementById('b1').innerHTML;
    let c1 = document.getElementById('c1').innerHTML;
    let a2 = document.getElementById('a2').innerHTML;
    let b2 = document.getElementById('b2').innerHTML;
    let c2 = document.getElementById('c2').innerHTML;
    let a3 = document.getElementById('a3').innerHTML;
    let b3 = document.getElementById('b3').innerHTML;
    let c3 = document.getElementById('c3').innerHTML;

    let winner = "";

    // Top row
    if (a1 === b1 && b1 === c1 && a1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (a1 === b1 && b1 === c1 && a1 === 'O') {
        winner += 'The O team wins!';
    }
    // Left column
    else if (a1 === a2 && a2 === a3 && a1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (a1 === a2 && a2 === a3 && a1 === 'O') {
        winner += 'The O team wins!';
    }
    // Top left diagonal
    else if (a1 === b2 && b2 === c3 && a1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (a1 === b2 && b2 === c3 && a1 === 'O') {
        winner += 'The O team wins!';
    }
    // Middle column
    else if (b1 === b2 && b2 === b3 && b1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (b1 === b2 && b2 === b3 && b1 === 'O') {
        winner += 'The O team wins!';
    }
    // Right column
    else if (c1 === c2 && c2 === c3 && c1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (c1 === c2 && c2 === c3 && c1 === 'O') {
        winner += 'The O team wins!';
    }
    // Top right diagonal
    else if (c1 === b2 && b2 === a3 && c1 === 'X') {
        winner += 'The X team wins!';
    }
    else if (c1 === b2 && b2 === a3 && c1 === 'O') {
        winner += 'The O team wins!';
    }
    // Middle row
    else if (a2 === b2 && b2 === c2 && a2 === 'X') {
        winner += 'The X team wins!';
    }
    else if (a2 === b2 && b2 === c2 && a2 === 'O') {
        winner += 'The O team wins!';
    }
    // Bottom row
    else if (a3 === b3 && b3 === c3 && a3 === 'X') {
        winner += 'The X team wins!';
    }
    else if (a3 === b3 && b3 === c3 && a3 === 'O') {
        winner += 'The O team wins!';
    }
    // All full
    else if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) {
        winner += "It's a tie!";
    }
    
    document.getElementById('winner').innerHTML = winner;
}