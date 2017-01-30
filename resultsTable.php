<?php   
	
	try {
    $conn = new PDO('sqlite:game.sqlite');
    
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}
$query =  "select * from level1 where player is not null";
$row=$conn->query($query)->fetchAll();
echo '<table class=\'table\'>
<tr><th>n</th><th>p</th><th>q</th><th>player</th></tr>
';
foreach ($row as &$value) {
	echo '<tr>';
	echo '<td>';
    echo $value[0];
	echo '</td>';
	echo '<td>';
	echo $value[1];
	echo '</td>';
	echo '<td>';
	echo $value[2];
	echo '</td>';
	echo '<td>';
	echo $value[3];
	echo '</td>';
	echo '</tr>';
}
echo '</table>';

?>