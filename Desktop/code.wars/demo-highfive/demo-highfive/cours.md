Lorsqu'une classe est annotée avec `@RestController`, 
Spring considère que chaque méthode sur cette classe 
renvoie des données à représenter directement dans le 
corps de la réponse HTTP en tant que données JSON (ou XML).

## Les méthodes ) définir sur un objet java

### equals()
Cette méthode permet de comparer l'objet courant avec un autre
objet passé en argument pour déterminer s'ils égaux ou non.

### hashCode()
Cette méthode retourne un code de hashage(numero calculé à partir
des valeurs internes de l'objet) entier pour l'objet . IL est 
important que si deux objets sont égaux selon la méthode equals().
Ils aient le même code de hachage.

### toString()
Cette méthode retourne une chaîne de caractère représentant
l'objet. Il est recommandé de redéfinir cette méthode dans nos
classes pour retourner une représentation plus significative de l'objet.

## Bean
Un bean est une intance d'une classe qui est automatiquement générée par Java.