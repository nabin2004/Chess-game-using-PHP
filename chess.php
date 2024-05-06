<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Grandmaster</title>
<link href="chess.css" rel="stylesheet"/>
<script defer="" src="chess.js"></script>
</head>
<body>

<div class="chess" id='chess'>

<div class="timer">
        <div id="white-timer"> 00:00 </div>
        <div id="black-timer"> 00:00 </div>
    </div>

<?php
session_start();
?>

<?php
if(!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}
?>


<div class="main_container">
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file A -->
<div class="file-a files">
<div class="square" id="a8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" onclick="handleClick(event)" id="LBlackrook" ondragstart="DragStartHere(event)" src="./images/pieces/black/rook.png"/></div>
<div class="square" id="b8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" onclick="handleClick(event)" class='Blackpawn8' id="Blackpawn18" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" class='pawn8' onclick="handleClick(event)" id="Whitepawn28" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h8" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="LWhiterook" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/rook.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file B -->
<div class="file-b files">
<div class="square" id="a7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="LBlackKnight" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/knight.png"/></div>
<div class="square" id="b7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn37" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn47" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h7" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="LWhiteKnight" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/knight.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file C -->
<div class="file-c files">
<div class="square" id="a6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="LBlackBishop" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/bishop.png"/></div>
<div class="square" id="b6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn56" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn66" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h6" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="LWhiteBishop" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/bishop.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file D -->
<div class="file-d files">
<div class="square" id="a5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="BlackQueen" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/queen.png"/></div>
<div class="square" id="b5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn75" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn85" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h5" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="WhiteQueen" onclick="handleClick(event) " ondragstart="DragStartHere(event)" src="./images/pieces/white/queen.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file E -->
<div class="file-e files">
<div class="square" id="a4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="BlackKing" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/king.png"/></div>
<div class="square" id="b4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn94" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn104" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h4" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="WhiteKing" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/king.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file F -->
<div class="file-f files">
<div class="square" id="a3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RBlackBishop" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/bishop.png"/></div>
<div class="square" id="b3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn113" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn123" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h3" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RWhiteBishop" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/bishop.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file g -->
<div class="file-g files">
<div class="square" id="a2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RBlackKnight" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/knight.png"/></div>
<div class="square" id="b2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn132" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn142" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h2" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RWhiteKnight" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/knight.png"/></div>
</div>
<!--File is a column in chess and chess player call column as FILE-->
<!-- This is file h -->
<div class="file-h files">
<div class="square" id="a1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RBlackrook" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/rook.png"/></div>
<div class="square" id="b1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Blackpawn151" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/black/pawn.png"/></div>
<div class="square" id="c1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="d1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="e1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="f1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"></div>
<div class="square" id="g1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="Whitepawn161" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/pawn.png"/></div>
<div class="square" id="h1" ondragover="DragOverhere(event)" ondrop="DropHere(event)"><img alt="" id="RWhiterook" onclick="handleClick(event)" ondragstart="DragStartHere(event)" src="./images/pieces/white/rook.png"/></div>
</div>
</div>
</div>
</body>
</html>