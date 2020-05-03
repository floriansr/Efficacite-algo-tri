let fs = require('fs');

try {
	fs.readFile(process.argv[2], 'utf8', (error, data) => {
		
		newData = data.split(' ').map(Number);
		// console.log(newData)

		for (let i = 0; i < newData.length; i++){
		
			value = parseFloat(newData[i])

			if (!value && value !== 0){
			return console.log("Bad args in file");
			}
		}
		let counter = "";
		// bubbleSort(newData.slice());
		// insertionSort(newData.slice(), newData.length);
		// selectionSort(newData.slice(), newData.length);
		console.log(quickSort(newData.slice()));
	});
}
catch (error) {
	if (!process.argv[2]) {
	  console.log("Echec loading array");
	  return;
	}
  	console.error(error);
  	return;
}


const quickSort = (origArray, counter) => {


	if (origArray.length <= 1) { 
		if (counter !== undefined) {       // array côté gauche renvoit undefined
			console.log(`Tri rapide : ${counter} comparaisons`)
		}
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {

			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
			 counter++;
		}
		return newArray.concat(quickSort(left), pivot, quickSort(right, counter));  //on relance la fonction #récursivité avec la variable counter qu'on a incrémenté seulement du côté droit
	}
}