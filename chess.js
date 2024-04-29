var previousPosition = {};

url = 'http://localhost/Chess/Chess-game-using-PHP/chess.php';

fetch(url, {
    headers: {
        'Cache-Control': 'no-cache'
    }
});


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
   

    if (dropZone === document.getElementById(previousPosition[draggedItemId])) {
        return true;
    }
    if (isValidMove(draggedItemId, dropZone.id, parentItem.id)) {
            dropZone.appendChild(draggedItem);
            draggedItem.style.opacity = '1';
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
            // var childToRemove = document.getElementById(dropImgId);
            dropZoneItem.parentNode.removeChild(dropZoneItem);
            dropZoneItem.parentNode.appendChild(draggedItem);
            dropZoneItem.style.opacity = '1';
            console.log('Drop ');
        }
    }else{
    // Append the dragged item to its previous position
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

function hightlightLogic() {
    //code for highlight logic
}
