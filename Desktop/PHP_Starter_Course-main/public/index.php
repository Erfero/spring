<?php
declare(strict_types=1);



echo ("Hello World");
echo "<br>";
print("Bonjour chers amis !");


$user;
$user = "salut!";
echo "<br>";
$user = "bonjour";
echo "<br>";
var_dump($user);
echo "<br>";

$firstname = "Jonh"; // guillement double
echo "<br>";
echo $firstname;
$lastname = 'Doe'; // guillement simple
echo "<br>";
$msg = "bonjour 
tout le monde";
echo $msg;
echo "<br>";

echo $firstname . " " . $lastname;

$num1 = 3;
$moyenne = 12.5;
echo "<br>";
var_dump($num1);
var_dump($moyenne);
echo "<br>";
echo $num1 . ' ' . $moyenne;

$fruits = array("pomme", "orange", "banane");
echo "<br>";
$notes = [10, 15, 30];
$arr = ["Hello", 15, true, false, null];
var_dump($arr, $fruits, $notes);
echo "<br>";

echo "<pre>";
print_r($fruits);
echo "</pre>";

class user
{
}
$u = new User();
var_dump($u); // object(user)#identifiant_unique (nombre_de_propriétés)



// type conversion
$floatNum = 3.14;
$intNum = (int) $floatNum; //on obtient un entier
$x = (int) 3.14;

// 

$floatNum = 3.14;
$intNum = (int) $floatNum; //on obtient un entier
$y = floatval(3);
var_dump($floatNum, $intNum, $x);

echo "<br>";
$age = 20;

if ($age < 18) {
    echo ("Vous êtes mineur");
} else if ($age > 18) {
    echo ("Vous êtes majeur");
} else {
    echo ("vous avez 18 ans");
}

echo "<br>";
$jour = 6;

switch ($jour) {
    case 0:
        echo "dimanche";
        break;
    case 1:
        echo "lundi";
        break;
    case 2:
        echo "mardi";
        break;
    case 3:
        echo "mercredi";
        break;
    case 4:
        echo "jeudi";
        break;
    case 5:
        echo " vendredi";
        break;
    case 6:
        echo "samedi";
        break;
}

$age = 1;
while ($age < 10) {
    echo $age;
    $age++;
}

for ($i = 0; $i < 10; $i++) {
    echo $i;
}

$fruits = ["pomme", "raisin", "banane"];
for ($i = 0; $i < count($fruits); $i++) {
    echo "<br>";
    echo $fruits[$i] . " ";
}
foreach ($fruits as $fruit) {
    echo "<br>";
    echo $fruit . " ";
}

// tableay associatif 
$notes = [
    "Erféro" => 20,
    "Emile" => 17,
    "Alid" => 20,
    "Sam-Rod" => 15
];
$notes1 = array(
    "Erféro" => 20,
    "Emile" => 17,
    "Alid" => 20,
    "Sam-Rod" => 15
);

echo $notes["Emile"];

echo "<pre>";
print_r($notes);
echo "</pre>";

// $notes["Erféro"];
echo "<br>";

foreach ($notes as $etudiant => $note) {
    echo $etudiant . " a une note de " . $note . " / 20<br>";
}

// function add($x, $y) {
//     return $x + $y;
// }

// echo add(4, 6);
function add(int $x, int $y): int {
    return $x + $y;
}

echo add(4, 6);
function soust(float $x, float $y): float {
    return $x - $y;
}
echo "<br>";

echo soust(9.5, 6.5);

echo "<br>";

echo soust(y:9.5, x:6.5);


// tyoe hinting, strict_types





?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <script>

    </script>
</head>

<body>
    <p>Welcome !</p>
</body>

</html>