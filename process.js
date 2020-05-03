let fs = require('fs');

try {
	fs.readFile(process.argv[2], 'utf8', (error, data) => {
		
		newData = data.split(' ').map(Number);

		for (let i = 0; i < newData.length; i++){  // check for valid file (only numbers)
		
			value = parseFloat(newData[i])

			if (!value && value !== 0){
			return console.log("Bad args in file");
			}
		}
		
		bubbleSort(newData.slice()); // slice pour ne pas modifier le tableau original
		insertionSort(newData.slice(), newData.length);
		selectionSort(newData.slice(), newData.length);

		//recursive function, have to call function with console.log if array return is required
		// console.log(quickSort(newData.slice(),0));
		quickSort(newData.slice(),0);
	});
}
catch (error) { // check si un fichier est load (ici : node process.js sans list.txt)
	if (!process.argv[2]) {
	  console.log("Echec loading array");
	  return;
	}
  	console.error(error);
  	return;
}

const bubbleSort = (x) => {
	let nbComp = 0;

	for (let i = (x.length - 1); i >= 1; i--){
		for (let j = 0 ; j <= (i-1) ; j++){
		nbComp++;

			if (x[j+1] < x[j]){
				let p = x[j + 1];
				x[j + 1] = x[j];
				x[j] = p;
			}
		}
	}
	console.log(`Tri à bulle: ${nbComp} comparaisons` + " " + x);
}

const insertionSort = (x, n) => {
	let nbComp = 0;
    for (let i = 1; i <= n-1; i++) {
            
            let tmp = x[i];
            let j = i;

            while (j > 0 && x[j - 1] > tmp) {
            nbComp++;

                x[j] = x[j - 1];
                j = j - 1;
            }
        x[j] = tmp
    }
    console.log(`Tri par insertion: ${nbComp} comparaisons` + " " + x)
}

const selectionSort = (x, n) => {
	
	let nbComp = 0;

	for (let i = 0; i <= (n - 2); i++){
		
		let min = i
			
		for (let j = i + 1; j <= n-1; j++){
			nbComp++;

			if (x[j] < x[min]){
				min = j
			}
		}

		if (min != i){
			[x[i], x[min]] = [x[min], x[i]]
		}
	}
	console.log(`Tri par sélection: ${nbComp} comparaisons` + " " + x)
}

const quickSort = (x, counter) => {

	if (x.length <= 1) { 
		if (counter !== undefined) {   // array côté gauche renvoit undefined
			console.log(`Tri rapide : ${counter} comparaisons`)
		}
		return x;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = x.pop(); // La méthode pop() supprime le dernier élément d'un tableau et retourne cette valeur.
		let length = x.length;

		for (let i = 0; i < length; i++) {

			if (x[i] <= pivot) {
				left.push(x[i]);
			} else {
				right.push(x[i]);
			}
			 counter++;
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right, counter));  //on relance la fonction #récursivité avec la variable counter qu'on a incrémenté seulement du côté droit
	}
}