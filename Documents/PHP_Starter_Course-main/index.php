<?php

declare(strict_types=1);

// type hinting, strict_types
// type hinting ou l'annotation de type
/**
 * Nous avons la capacité d'annoter les paramètres de fonction
 * et les valeurs de retours. Cela permet d'améliorer la 
 * lisibilité.
 * 
 * L'annotation de type est souvent utilisée conjointement avec
 * la directive "declare(strict_types=1)" pour activer le mode
 * strictde typage.
 */
function add(float $x, float $y): float {
  return $x + $y;
}

echo add(4.5, 6.5);
// paramètres nommées : php-8.0
echo add(y: 5.5, x: 3.2);
