let fs = require('fs');

try {
	fs.readFile(process.argv[2], 'utf8', (error, data) => {
		
		newData = data.split(' ').map(Number);
		
		bubbleSort(newData.slice());
		insertionSort(newData.slice(), newData.length);
		selectionSort(newData.slice(), newData.length);
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