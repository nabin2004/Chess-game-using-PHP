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
}

function stopBlackTimer() {
    clearInterval(blackInterval);
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

    // Check if it's the current player's turn
    if ((isWhiteTurn && draggedItem.id.includes('White')) || (!isWhiteTurn && draggedItem.id.includes('Black'))) {
        console.log('It is not your turn to move.');
        returnToPreviousPosition(draggedItem, dropZone);
        return; // Stop further execution
    }

    if (dropZone === document.getElementById(previousPosition[draggedItemId])) {
        return true;
    }

    if (isValidMove(draggedItemId, dropZone.id, parentItem.id)) {
        dropZone.appendChild(draggedItem);
        draggedItem.style.opacity = '1';
        var move = new Audio('sounds/move-self.mp3');
        move.play();
        switchTurns();
    } else {
        returnToPreviousPosition(draggedItem, dropZone);
    }
}


function isDropZoneEmptyOrSamePlayer(dropZone, draggedItemId) {
    if (dropZone.children.length === 0) {
        return true;
    }

    var occupyingPieceId = dropZone.children[0].id;

    return !isOpponentPiece(occupyingPieceId, draggedItemId);
}

function isValidMove(pieceId, dropZoneId, parentZoneId) {
    var str_pieceId = String(pieceId);
    var str_dropZoneId = String(dropZoneId);

    if (str_pieceId.includes('pawn')) {
        if ((Number(str_pieceId[str_pieceId.length - 1]) === Number(str_dropZoneId[str_dropZoneId.length - 1]))) {
            return true;
        }
    }

    if (str_pieceId.endsWith('rook') || str_pieceId.endsWith('Queen')) {
        if (parentZoneId[0] === dropZoneId[0] || parentZoneId[1] === dropZoneId[1]) {
            return true;
        }
    }

    if (str_pieceId.endsWith('Bishop') || str_pieceId.endsWith('Queen')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if (deltaX === deltaY) {
            return true;
        }
    }

    if (str_pieceId.endsWith('King')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if (deltaX <= 1 && deltaY <= 1) {
            return true;
        }
    }

    if (str_pieceId.endsWith('Knight')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if ((deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2)) {
            return true;
        }
    }
}

function returnToPreviousPosition(draggedItem, dropZoneItem) {
    console.log('returning to previous position');
    console.log('ROI draggedItem', draggedItem);
    console.log('ROI dropZoneItem', dropZoneItem);
    console.log('Delete', dropZoneItem.id);
    console.log('Delete', dropZoneItem.children.length);

    if (dropZoneItem) {
        var dropImgId = dropZoneItem.id;
        var draggedImgId = draggedItem.id;
        console.log("dropImgId", dropImgId, "draggedImgId", draggedImgId);
        if ((dropImgId.includes('Black') && draggedImgId.includes('White')) || (dropImgId.includes('White') && draggedImgId.includes('Black'))) {
            if(dropImgId.includes('King')){
                alert('Check'); // THis is shit code but I am just like thinking and I dont want to remove this coz it will destroy my chain of thought
                window.location.reload();
            }
            dropZoneItem.parentNode.appendChild(draggedItem);
            dropZoneItem.parentNode.removeChild(dropZoneItem);
            var audio = new Audio('sounds/capture.mp3');
            audio.play();
            dropZoneItem.style.opacity = '1';
            console.log('Drop ');
     
        }
    }else{
    // Append the dragged item to its previous position
    var previousZoneId = previousPosition[draggedItem.id];
    document.getElementById(previousZoneId).appendChild(draggedItem);
    draggedItem.style.opacity = '1';
    console.log('Invalid moveddd');
    // var audio = new Audio('sounds/wrong.mp3');
    // audio.play();
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

function highlightValidMoves(pieceId, parentZoneId) {
    hightlightLogic();
    var dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(function(dropZone) {
        if (isValidMove(pieceId, dropZone.id, parentZoneId) && isDropZoneEmptyOrSamePlayer(dropZone, pieceId)) {
            dropZone.classList.add('highlight');
        }
    });
}

// Function to remove highlights from all boxes
function hightlightLogic() {
    var highlightedBoxes = document.querySelectorAll('.highlight');
    highlightedBoxes.forEach(function(box) {
        box.classList.remove('highlight');
    });
}

function checkChecker() {
    //code for check checker

}
