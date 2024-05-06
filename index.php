<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Online Chess</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
        
        p {
            color: #666;
            text-align: center;
        }
        
        form {
            text-align: center;
            margin-top: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
        }
        
        input[type="text"],
        input[type="password"],
        input[type="email"] {
            padding: 5px;
            width: 200px;
        }
        
        input[type="submit"] {
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        
        input[type="submit"]:hover {
            background-color: #555;
        }
        
        /* Responsive Styles */
        @media (max-width: 600px) {
            h1 {
                font-size: 24px;
            }
            
            p {
                font-size: 14px;
            }
            
            input[type="text"],
            input[type="password"],
            input[type="email"] {
                width: 100%;
            }
        }
    </style>
</head>
<body>

<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "login";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if the username exists in the database
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            header('Location: chess.php');
            exit();
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "User not found";
    }
}

mysqli_close($conn);
?>

<h1>Welcome to Online Chess</h1>
<p>Join the exciting world of online chess and challenge players from around the globe!</p>
    
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
    <label for="username">Enter your username:</label>
    <input type="text" id="username" name="username" required>
    <br><br>
    <label for="password">Enter your password:</label>
    <input type="password" id="password" name="password" required>
    <br><br>
    <input type="submit" value="Start Game">
</form>
</body>
</html>
