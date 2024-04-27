<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grandmaster</title>
    <link rel="stylesheet" href="chess.css">
    <script src="chess.js" defer></script>
</head>
<body>
<div class="chess">
<div class="main_container">
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file A -->
<div class="file-a files">
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" id='rook' draggable="true" src="./images/pieces/black/rook.png" alt="" /></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)" ><img onDragStart="DragStartHere(event)" id='pawn1' draggable="true" src="./images/pieces/black/pawn.png" alt="" /></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn2' alt="" /></div>
    <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/rook.png" id='LWrook'  alt="" /></div>
</div>

<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file B -->
    <div class="file-b files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/knight.png" id='LBknight' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn3' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn4' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/knight.png" id='LWKnight' alt="" /></div>
    </div>

<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file C -->
    <div class="file-c files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/bishop.png" id="LBBishop" alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn5' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn6' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/bishop.png" id='LWBishop' alt="" /></div>
    </div>

<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file D -->

    <div class="file-d files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/queen.png" id='BQueen' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn7' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn8' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)"  src="./images/pieces/white/queen.png" id='WQueen' alt="" /></div>
    </div>


<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file E -->
    <div class="file-e files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/king.png" id='BKing' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)"  src="./images/pieces/black/pawn.png" id='pawn9' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn10' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/king.png" id='WKing' alt="" /></div>
    </div>


<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file F -->
    <div class="file-f files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/bishop.png" id='RBBishop' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn11' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn12' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/bishop.png" id='RWBishop' alt="" /></div>
    </div>


<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file g -->
    <div class="file-g files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/knight.png" id='RBKnight' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn13' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn14' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/knight.png" id='RWKnight' alt="" /></div>
    </div>


<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file h -->
    <div class="file-h files">
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/rook.png" id='RBRook' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/black/pawn.png" id='pawn15' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/pawn.png" id='pawn16' alt="" /></div>
        <div class="square" onDragOver="DragOverhere(event)" onDrop="DropHere(event)"><img onDragStart="DragStartHere(event)" src="./images/pieces/white/rook.png" id='RWRook' alt="" /></div>
    </div>



</div>
</div>


</body>
</html>