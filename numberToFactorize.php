<?php   
	
	try {
    $conn = new PDO('sqlite:game.sqlite');
    
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}
$query =  "select n from level1 where player is null";
$row=$conn->query($query)->fetchAll();
echo $row[0][0];


?>