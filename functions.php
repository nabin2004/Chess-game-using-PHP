<?php
function authenticateUser($conn, $username, $password) {
    $sql = "SELECT * FROM users WHERE username=?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $username);

    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    // count the number of rows returned

    if (!$result && mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        if (isset($row['password']) && password_verify($password, $row['password_hash'])) {
            echo "Password is correct";
        } else {
            return "Incorrect password";
        }
    } else {
        return "User not found or database error";
    }
}
?>
