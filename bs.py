from bs4 import BeautifulSoup

# Define a mapping of file (column) letters to their corresponding chessboard coordinate letters
file_to_letter = {
    "file-a": "a",
    "file-b": "b",
    "file-c": "c",
    "file-d": "d",
    "file-e": "e",
    "file-f": "f",
    "file-g": "g",
    "file-h": "h"
}

# Read the HTML file
with open("chess.php", "r") as f:
    html_content = f.read()

# Parse the HTML
soup = BeautifulSoup(html_content, "html.parser")

# Find all square elements
square_elements = soup.find_all(class_="square")

# Assign IDs based on chessboard coordinates
for index, square in enumerate(square_elements, start=1):
    file_class = square.parent["class"][0]  # Get the class of the parent element to determine the file
    file_letter = file_to_letter.get(file_class, "")
    rank_number = (index - 1) % 8 + 1  # Calculate the rank number (1-8)
    rank_letter = chr(96 + rank_number)  # Convert rank number to corresponding letter (a-h)
    square_id = f"{rank_letter}{8 - (index - 1) // 8}"  # Combine file letter and rank number to form square ID
    square["id"] = square_id

# Write the modified HTML back to a file
with open("m_chess.php", "w") as f:
    f.write(str(soup))
