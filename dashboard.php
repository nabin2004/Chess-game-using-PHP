<?php
session_start();

// Check if user is not logged in
if (!isset($_SESSION['username'])) {
    header('Location: index.php'); // Redirect to login page
    exit(); // Stop script execution
}

require 'config.php'; // Include database connection    
$result = mysqli_query($conn, "SELECT * FROM player_stats WHERE uid=(SELECT uid FROM users WHERE username='{$_SESSION['username']}')");
$row = mysqli_fetch_assoc($result);
if ($row) {
    $wins = $row['wins'];
    $rating = $row['ratings'];
    $games_played = $row['games_played'];
    $losses = $row['losses'];
    $draws = $row['draws'];
} else {
    $wins = 0;
    $losses = 0;
    $draws = 0;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['username']; ?></h1>
    <!-- Your dashboard content goes here -->
    <h2>Player Stats</h2>
    <p>Wins: <?php echo $wins; ?></p>
    <p>Losses: <?php echo $losses; ?></p>
    <p>Draws: <?php echo $draws; ?></p>
    <p>Games Played: <?php echo $games_played; ?></p>
    <h1>Ratings: <?php echo $rating; ?></h1>

</body>
</html>


<?php
echo "Welcome to the dashboard";
?>

