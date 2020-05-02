let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	
	newData = data.split(' ').map(Number);
	
	bubbleSort(newData);
	insertionSort(newData, newData.length);
	selectionSort(newData, newData.length);
	// quickSort(newData, newData[newData.length - 1], newData[0]);
});

const bubbleSort = (x) => {
	let nbComp = 0;

	for (let i = (x.length - 1); i >= 1; i--){
		for (let j = 0 ; j <= (i-1) ; j++){
		nbComp++;

			if (x[j+1] < x[j]){
			x.sort((a, b) => a - b)
			}
		}
	}
	console.log(`Tri à bulle: ${nbComp} comparaisons`);
}

const insertionSort = (x, n) => {
	let counter = 0;
    for (let i = 1; i <= n-1; i++) {
            
            let tmp = x[i];
            let j = i;

            while (j > 0 && x[j - 1] > tmp) {
            counter++;

                x[j] = x[j - 1];
                j = j - 1;
            }
        x[j] = tmp
    }
    console.log(`Tri par insertion: ${counter} comparaisons`)
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
	console.log(`Tri par sélection: ${nbComp} comparaisons` + x)
}

// const quickSort = (x, d, n) => {
	
// 	console.log(x) // array
	
// 	console.log(d) // dernier élément
// 	console.log(n) // pivot
// 	console.log(x)

// 	[x[0], x[x.length-1] = [x[x.length-1], x[0]]
// }