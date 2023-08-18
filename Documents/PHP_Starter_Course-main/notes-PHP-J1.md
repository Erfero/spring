## variables

### declaration
  En php, toutes les variables commencent par un "**$**"
  Toute déclaration php, se termine toujours par un point-virgule.

  Exemple:
  ```php
  $user = "John";
  $num = 2;
  $isAdmin = false;
  ```
### naming convention
  La convention de nommage des variables est la suivante:
  1- toutes les variables commencent forcément par un dollar
  2- le nom d'une variable doit être composé uniquement de caractères alpha-numérique et du tiret de 8 (_)
  3- le nom d'une variable ne doit pas commencer par un chiffre
## types
En php le type d'une variable lui est assigné quand vous lui donnez une valeur. On utilise la fonction `var_dump()` pour avoir les informations,
concernant le type d'une variable.

```php
$user;
var_dump($user);
```

### string
réprésente les chaînes de caractère.
se déclare avec soit un guillemet double ("") ou un guillemet simple ('').
La concaténation de deux chaines de caractères se fait avec un point (.)

```php
$fname = "John";
$lname = "Doe";
echo $fname . " " . $lname; // John Doe
```

### ## numbers
répresente tous les nombres; entiers comme à virgules. On en distingue deux séparations:
 - int: désignant les nombres entiers
 - float: désignant les nombres flottants (nombres décimaux)

```php
$num1 = 3;
$moyenne = 18.5;
var_dump($num1); // int
var_dump($moyenne); // float
```

### boolean
représente les valeurs de vérités; soit "true" soit "false";
```php
$isAdmin = true;
$isEven = false;
var_dump($isAdmin); // bool
```

### null
représente l'absence de valeurs
```php
$data = null;
var_dump($data); // null
```

### array
représente un tableau.
```php
$fruits = array("pomme", "orange", "banane");
$notes = [20, 18, 16];
$arr = ["hello", 2, true, null];
var_dump($fruits, $notes, $arr);
```

### object
représente un objet. Pour créer un objet, il faut créer une classe, puis l'instancier.

```php
class User {}
$u = new User();
var_dump($u); // object(User)#identifiant_unique (nombre_de_propriétés)
```
## Type conversion
pour convertir d'un type à un autre, il suffit de préciser l'opérateur de conversion explicite.

```php
$floatNum = 3.14;
$intNum = (int)$floatNum; // on obtient un entier
$x = (int)3.14;
```
En plus, nous pouvons utiliser les fonctions php natives telles que
*intval()*, *floatval()*, *boolval()* ...
```php
$floatNum = 3.14;
$intNum = intval($floatNum); // (int)3

$y = floatval(3); // (float)3.0
```
## conditions
Les conditions en PHP sont identiques au JS, et on y retrouve les mêmes opérateurs de comparaison tels que: <,  <=,  >,  >=,  !=,  ==,  ===, !==
### if, if...else, if...else...else if
### switch
## boucles
### while
### foreach
### do...while
## fonctions
### simples
### type...hinting (annotation du type)
### type nullable
### valeur par defaut
### declare(strict_types=1)
## classes
### definition d'une classe
## conventions
### psr-12