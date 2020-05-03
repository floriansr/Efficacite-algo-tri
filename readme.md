### Complexité algorithmique

#Les classes
Pour représenter la complexité d'un algorithme, il existe plusieurs classes de complexité, en fonction d'un paramètre n (exemple de votre projet: taille d'un tableau) :

O(1) indique un temps d’exécution constant, indépendant de n
O(n) indique essentiellement que l’on doit effectuer un nombre constant d’opérations sur chaque donnée d’entrée
O(log n) implique que toutes les données n’ont pas à être traitées
O(n²) implique un nombre d’opérations proportionnel à n, pour chaque donnée
O(n log n) est typique des algorithmes diviser-pour-régner (ex: tri fusion)
O(n^a) pour a ≥ 1 : algorithme à temps polynomial
O(a^n) est un algorithme à temps exponentiel. Donc algorithme très lent
O(n!) : algorithme le plus lent


#Rendu attendu

```
Un fichier qui affiche en sortie dans la console le nombre de comparaisons pour les différents algos de tri à implémenter.
```


Voici les différents algorithmes de tri à implémenter :

Tri à bulle
Tri par insertion
Tri par sélection
Tri rapide (tri pivot), attention ici on prendra le premier nombre du tableau comme pivot.

Le tri rapide devra utiliser la récursivité.

#Installing

```
git clone https://github.com/floriansr/Efficacite-algo-tri.git
```

```
cd Efficacite-algo-tri
```

```
node process.js list.txt
```


## Author
* **Florian Sueur** - *Initial work* - (https://github.com/floriansr)