var previousPosition = {}; // Object to store the previous position of pieces

function DragStartHere(event) {
    var draggedItem = event.target;
    event.dataTransfer.setData('text/plain', draggedItem.id);
    console.log('dragstart');
    console.log('Id of dragged item: ', draggedItem.id);
    setTimeout(function() {
        draggedItem.style.opacity = '0';
    }, 0);

    // Store the previous position of the dragged item
    previousPosition[draggedItem.id] = draggedItem.parentElement.id;
}

function DragOverhere(event) {
    event.preventDefault();
    console.log('dragover');
}

function DropHere(event) {
    event.preventDefault();
    console.log('drop');
    var draggedItemId = event.dataTransfer.getData('text/plain');
    var draggedItem = document.getElementById(draggedItemId);
    var parentItem = draggedItem.parentElement;
    var dropZone = event.target;

    // Check if the drop zone is the same as the original parent of the dragged item
    if (dropZone === document.getElementById(previousPosition[draggedItemId])) {
        console.log('Dropped back into original position. Cancelling.');
        return;
    }

    // Check if the drop zone is valid for the chess piece
    if (isValidMove(draggedItemId, dropZone.id, parentItem.id)) {
        dropZone.appendChild(draggedItem);
        draggedItem.style.opacity = '1';
        console.log('Piece dropped successfully.');
    } else {
        console.log('Invalid move.');
        returnToPreviousPosition(draggedItem);
    }
}

function isValidMove(pieceId, dropZoneId, parentZoneId) {
    console.log('Checking if the move is valid...')
    var str_pieceId = String(pieceId);
    console.log('Parent div: ', parentZoneId);
    var str_dropZoneId = String(dropZoneId);
    console.log('Piece ID: ', str_pieceId);
    console.log('Drop Zone ID: ', str_dropZoneId);

    if (str_pieceId.includes('pawn')) {
            if((Number(str_pieceId[str_pieceId.length - 1]) === Number(str_dropZoneId[str_dropZoneId.length - 1] ))){
                return true;
            }
    }

    if (str_pieceId.endsWith('rook') || str_pieceId.endsWith('Queen')) {
        if (parentZoneId[0] === dropZoneId[0] || parentZoneId[1] === dropZoneId[1]) {
            return true; // Valid horizontal or vertical move for rook or queen
        }
    }

    if (str_pieceId.endsWith('Bishop') || str_pieceId.endsWith('Queen')) {
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if (deltaX === deltaY) {
            return true; // Valid diagonal move for bishop or queen
        }
    }if(str_pieceId.endsWith('King')){
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if(deltaX <= 1 && deltaY <= 1){
            return true;
        }
    }
    if(str_pieceId.endsWith('Knight')){
        var deltaX = Math.abs(parentZoneId.charCodeAt(0) - dropZoneId.charCodeAt(0));
        var deltaY = Math.abs(parseInt(parentZoneId[1]) - parseInt(dropZoneId[1]));

        if((deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2)){
            return true;
        }
    
    }}

// Function to return the dragged item to its previous position
function returnToPreviousPosition(draggedItem) {
    var previousZoneId = previousPosition[draggedItem.id];
    document.getElementById(previousZoneId).appendChild(draggedItem);
    draggedItem.style.opacity = '1';
    console.log('Piece returned to its previous position.');
}


function deathLogic(){
    //code for death logic
}

function promotionLogic(){
    //code for promotion logic
}

function hightlightLogic(){
    //code for highlight logic
}