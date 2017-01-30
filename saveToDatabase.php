<?php   
	
	try {
    $conn = new PDO('sqlite:game.sqlite');
    
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}
$query =  "SELECT p,q FROM level1 where player is null";
$row=$conn->query($query)->fetchAll();
if ($_POST['p']==$row[0][0]||$_POST['p']==$row[0][1]) {
	$statement = $conn->prepare("UPDATE level1 SET player=:player WHERE n=:n");
	$statement->bindValue(':n', $_POST['n']);
	$statement->bindValue(':player', $_POST['player']);
	$statement->execute();
	$a= gmp_nextprime(gmp_random_bits(20)); 
	$b= gmp_nextprime(gmp_random_bits(20)); 
	$c=$a*$b;
	$statement2 = $conn->prepare("INSERT INTO level1 (n,p,q) VALUES (:c,:b,:a)");
	$statement2->bindValue(':a', $a);
	$statement2->bindValue(':b', $b);
	$statement2->bindValue(':c', $c);
	$statement2->execute();
	echo 'true';
}
else {
	echo 'false';
}
?>