var previousPosition = {};

url = 'http://localhost/Chess/Chess-game-using-PHP/chess.php';

fetch(url, {
    headers: {
        'Cache-Control': 'no-cache'
    }
});

let whiteTimer = 0;
let blackTimer = 0;
let whiteTimerInterval;
let blackTimerInterval;
let isWhiteTurn = true;

function updateTimer(timer, elementId){
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    document.getElementById(elementId).innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startWhiteTimer() {
    whiteInterval = setInterval(() => {
        whiteTimer++;
        updateTimer(whiteTimer, 'white-timer');
    }, 1000);
}

function startBlackTimer() {
    blackInterval = setInterval(() => {
        blackTimer++;
        updateTimer(blackTimer, 'black-timer');
    }, 1000);
}

function stopWhiteTimer() {
    clearInterval(whiteInterval);
    colorBackgroundTurns();
}

function stopBlackTimer() {
    clearInterval(blackInterval);
    colorBackgroundTurns();
}

function startGame() {
    startWhiteTimer();
}

function switchTurns() {
    isWhiteTurn = !isWhiteTurn;
    
    if (isWhiteTurn) {
        startWhiteTimer();
        stopBlackTimer();
    }else{
        startBlackTimer();
        stopWhiteTimer();
    }
}

function colorBackgroundTurns(){
    if(isWhiteTurn){
        document.getElementById('chess').classList.add('black-turn');
        document.getElementById('chess').classList.remove('white-turn');
    }else{
        document.getElementById('chess').classList.add('white-turn');
        document.getElementById('chess').classList.remove('black-turn');
    }
}

startGame(); 



function handleClick(event) {
    console.log("Handle Click");
    var clickedItem = event.target;
    var parentItem = clickedItem.parentElement;
    var highlightedElement = document.querySelector('.highlight');

    if (highlightedElement) {
        highlightedElement.classList.remove('highlight');
    }
    parentItem.classList.add('highlight');

    console.log('Clicked item', clickedItem);
    console.log('Parent item', parentItem);
}



document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl + S is blocked :-)');
    }
});


function DragStartHere(event) {
    var draggedItem = event.target;
    event.dataTransfer.setData('text/plain', draggedItem.id);
    setTimeout(function() {
        draggedItem.style.opacity = '1';
    }, 0);
    previousPosition[draggedItem.id] = draggedItem.parentElement.id;
    draggedItem.parentElement.classList.remove('highlight');
}

function DragOverhere(event) {
    event.preventDefault();

}


function DropHere(event) {
    event.preventDefault();
    var draggedItemId = event.dataTransfer.getData('text/plain');
    var draggedItem = document.getElementById(draggedItemId);
    var parentItem = draggedItem.parentElement;
    var dropZone = event.target;
    
    // Clear highlights
    hightlightLogic();

    // Check if it's the current player's turn
    if ((isWhiteTurn && draggedItem.id.includes('White')) || (!isWhiteTurn && draggedItem.id.includes('Black'))) {
        console.log('It is not your turn to move.');
        returnToPreviousPosition(draggedItem, dropZone);
        return; 
    }

    // Remember the previous position for potential revert
    previousPosition[draggedItemId] = parentItem.id;

    // Perform the move
    if (isValidMove(draggedItemId, dropZone.id, parentItem.id)) {
        dropZone.appendChild(draggedItem);
        draggedItem.style.opacity = '1';
        var move = new Audio('sounds/move-self.mp3');
        move.play();

        // Check for check
        if (isCheckAfterMove(draggedItem)) {
            console.log("Check!");
        }

        // Switch turns
        switchTurns();
    } else {
        returnToPreviousPosition(draggedItem, dropZone);
    }
}

function isCheckAfterMove(piece) {
    // Get the king's id of the current player
    var currentPlayerKingId = isWhiteTurn ? 'WhiteKing' : 'BlackKing';

    // Get the square id where the king is currently placed
    var currentPlayerKingSquareId = document.querySelector(`#${currentPlayerKingId}`).parentElement.id;

    // Check if the current player's king is under attack after the move
    return isKingUnderAttack(currentPlayerKingSquareId, currentPlayerKingId);
}



function isDropZoneEmptyOrSamePlayer(dropZone, draggedItemId) {
    if (dropZone && dropZone.children.length > 0) {
        var occupyingPieceId = dropZone.children[0].id;
        if ((draggedItemId.includes('White') && occupyingPieceId.includes('White')) || 
            (draggedItemId.includes('Black') && occupyingPieceId.includes('Black'))) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}


function isValidMove(pieceId, dropZoneId, parentZoneId) {
    var str_pieceId = String(pieceId);
    var str_dropZoneId = String(dropZoneId);

    // If the piece is a pawn, check if the move is valid
    if (str_pieceId.includes('pawn')) {
        if ((Number(str_pieceId[str_pieceId.length - 1]) === Number(str_dropZoneId[str_dropZoneId.length - 1]))) {
            return true;
        }
    }

    // If the piece is a rook or queen, check if the move is valid along rows or columns
    if (str_pieceId.endsWith('rook') || str_pieceId.endsWith('Queen')) {
        if (parentZoneId[0] === dropZoneId[0] || parentZoneId[1] === dropZoneId[1]) {
            // Check if there are any pieces blocking the path
            if (!isPathBlocked(parentZoneId, dropZoneId)) {
                return true;
            }
        }
    }

    // If the piece is a bishop or queen, check if the move is valid diagonally
    if (str_pieceId.endsWith('Bishop') || str_pieceId.endsWith('Queen')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if (deltaX === deltaY) {
            // Check if there are any pieces blocking the path
            if (!isPathBlocked(parentZoneId, dropZoneId)) {
                return true;
            }
        }
    }

    // If the piece is a king, check if the move is valid
    if (str_pieceId.endsWith('King')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if (deltaX <= 1 && deltaY <= 1) {
            return true;
        }
    }

    // If the piece is a knight, check if the move is valid
    if (str_pieceId.endsWith('Knight')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if ((deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2)) {
            return true;
        }
    }

    return false;
}

function returnToPreviousPosition(draggedItem, dropZoneItem) {
    if (dropZoneItem) {
        var dropImgId = dropZoneItem.id;
        var draggedImgId = draggedItem.id;
        if ((dropImgId.includes('Black') && draggedImgId.includes('White')) || 
            (dropImgId.includes('White') && draggedImgId.includes('Black'))) {
            if(dropImgId.includes('King')){
                alert('Check');
                window.location.reload();
            }
            dropZoneItem.parentNode.appendChild(draggedItem);
            dropZoneItem.parentNode.removeChild(dropZoneItem);
            var audio = new Audio('sounds/capture.mp3');
            audio.play();
            draggedItem.style.opacity = '1';
        }
    } else {
        var previousZoneId = previousPosition[draggedItem.id];
        document.getElementById(previousZoneId).appendChild(draggedItem);
        draggedItem.style.opacity = '1';
        console.log('Invalid move');
    }
}

function checkDeathLogic(draggedItem, dropZone, parentItem) {
    console.log('death logic');
    if (dropZone.children.length > 0 && dropZone.children[0].tagName === 'IMG') {
        console.log('Drop zone contains an image');
    } else {
        console.log('Drop zone does not contain an image');
    }
    console.log('dropZone', dropZone);
    console.log('parentItem', parentItem);
    console.log('draggedItem', draggedItem);
    console.log('death logic end');
}



function isOpponentPiece(dropZoneItem, draggedItem) {
    console.log("isOpponentPiece",dropZoneItem.children[0].id);
    console.log(draggedItem.id);
    if ((dropZoneItem.children[0].id.includes('Black') && draggedItem.id.includes('White')) || (dropZoneItem.children[0].id.includes('White') && draggedItem.id.includes('Black'))) {
        console.log('Opponent piece detected');
    }
}

function promotionLogic() {
    //code for promotion logic
}

// function highlightValidMoves(pieceId, parentZoneId) {
//     hightlightLogic();
//     var dropZones = document.querySelectorAll('.drop-zone');
//     var highlightedZones = [];

//     // Highlight valid moves and store them in an array
//     dropZones.forEach(function(dropZone) {
//         if (isValidMove(pieceId, dropZone.id, parentZoneId) && isDropZoneEmptyOrSamePlayer(dropZone, pieceId)) {
//             dropZone.classList.add('highlight');
//             highlightedZones.push(dropZone);
//         }
//     });

//     // Show only the last two highlights
//     if (highlightedZones.length > 2) {
//         var zonesToRemove = highlightedZones.slice(0, highlightedZones.length - 2);
//         zonesToRemove.forEach(function(zone) {
//             zone.classList.remove('highlight');
//         });
//     }
// }


// Function to remove highlights from all boxes
function hightlightLogic() {
    var highlightedBoxes = document.querySelectorAll('.highlight');
    highlightedBoxes.forEach(function(box) {
        box.classList.remove('highlight');
    });
}


function checkChecker() {
    var squareNames = document.getElementsByClassName('square');
    var currentPlayerKingId = isWhiteTurn ? 'WhiteKing' : 'BlackKing';
    var currentPlayerKing = document.getElementById(currentPlayerKingId);
    var currentPlayerKingSquareId;

    // Find the square where the current player's king is located
    for (let k = 0; k < squareNames.length; k++) {
        if (squareNames[k].children.length > 0 && squareNames[k].children[0].id === currentPlayerKingId) {
            currentPlayerKingSquareId = squareNames[k].id;
            break;
        }
    }

    // Check if the current player's king is under attack
    if (isKingUnderAttack(currentPlayerKingSquareId, currentPlayerKingId)) {
        console.log("Check!");
    }
}

function isKingUnderAttack(kingSquareId, kingId) {
    var opposingPlayerIdPrefix = isWhiteTurn ? 'Black' : 'White';
    var dropZones = document.querySelectorAll('.square');
    var opposingPlayerPieces = [];

    // Find all opposing player's pieces on the board
    for (var i = 0; i < dropZones.length; i++) {
        if (dropZones[i].children.length > 0 && dropZones[i].children[0].id.startsWith(opposingPlayerIdPrefix)) {
            opposingPlayerPieces.push(dropZones[i].children[0]);
        }
    }

    // Check if any opposing player's piece can attack the king
    for (var j = 0; j < opposingPlayerPieces.length; j++) {
        var opposingPiece = opposingPlayerPieces[j];
        var opposingPieceId = opposingPiece.id;
        var opposingPieceSquareId = opposingPiece.parentElement.id;

        if (isValidMove(opposingPieceId, kingSquareId, opposingPieceSquareId)) {
            return true;
        }
    }
    return false;
}

function checkAllPossibleMoves(pieceId, parentZoneId) {
    var dropZones = document.querySelectorAll('.square');
    console.log(dropZones);
    var validMoves = [];
    dropZones.forEach(function(dropZone) {
        if (isValidMove(pieceId, dropZone.id, parentZoneId) && isDropZoneEmptyOrSamePlayer(dropZone, pieceId)) {
            validMoves.push(dropZone);
        }
    });

    return validMoves;
}


function isPathBlocked(startSquareId, endSquareId) {
    // Extract coordinates from square IDs
    var startX = startSquareId.charCodeAt(0);
    var startY = parseInt(startSquareId[1]);
    var endX = endSquareId.charCodeAt(0);
    var endY = parseInt(endSquareId[1]);

    // Determine direction of movement
    var deltaX = Math.sign(endX - startX);
    var deltaY = Math.sign(endY - startY);

    // Traverse the path between the two squares and check for pieces
    for (var x = startX + deltaX, y = startY + deltaY; x !== endX || y !== endY; x += deltaX, y += deltaY) {
        var currentSquare = document.getElementById(String.fromCharCode(x) + y);
        if (currentSquare.children.length > 0) {
            return true;
        }
    }
    return false;
}



