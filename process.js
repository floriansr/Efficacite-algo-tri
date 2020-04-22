let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	newData = data.split(' ').map(Number);
	// bubbleSort(newData);
	// insertionSort(newData, newData.length);
	// selectionSort(newData, newData.length);
	quickSort(newData, newData[newData.length - 1], newData[0]);
});

const bubbleSort = (x) => {

	// console.log(x.length) // nombre d'éléments dans tableau

	for (let i = (x.length - 1); i >= 1; i--){

		// console.log(i + " " + "tours de i") // nombre de tours = nombre d'éléments dans tableau

				for (let j = 0 ; j <= (i-1) ; j++){

					// console.log(j + " " + "tours")

					if (x[j+1] < x[j])
					x.sort((a, b) => a - b)
				}
	}
	console.log(x);
}

const insertionSort = (x, n) => {
       
    for (let i = 1; i <= n-1; i++) {
            
            let tmp = x[i];
            let j = i;
           
            while (j > 0 && x[j - 1] > tmp) {
                x[j] = x[j - 1];
                j = j - 1;
            }
        x[j] = tmp
    }
    console.log(x)
}

const selectionSort = (x, n) => {
	
	for (let i = 0; i <= (n - 2); i++){
		
		let min = i
			
		for (let j = i + 1; j <= n-1; j++){

			if (x[j] < x[min]){
				min = j
			}
		}

		if (min != i){
			[x[i], x[min]] = [x[min], x[i]]
		}
	}
	console.log(x)
}

const quickSort = (x, d, n) => {
	
	console.log(x) // array
	
	console.log(d) // dernier élément
	console.log(n) // pivot
	console.log(x)

	[x[0], x[x.length-1] = [x[x.length-1], x[0]]


	// [x.[indexOf(n)], x.[indexOf(d)]] = [x.[indexOf(d)], x.[indexOf(n)]];
}

// partitionner(tableau T, entier premier, entier dernier, entier pivot)
//     échanger T[pivot] et T[dernier]  // échange le pivot avec le dernier du tableau , le pivot devient le dernier du tableau
//     j := premier
//     pour i de premier à dernier - 1 // la boucle se termine quand i = (dernier-1).
//         si T[i] <= T[dernier] alors
//             échanger T[i] et T[j]
//             j := j + 1
//     échanger T[dernier] et T[j]
//     renvoyer j

// tri_rapide(tableau T, entier premier, entier dernier)
//         si premier < dernier alors
//             pivot := choix_pivot(T, premier, dernier)
//             pivot := partitionner(T, premier, dernier, pivot)
//             tri_rapide(T, premier, pivot-1)
//             tri_rapide(T, pivot+1, dernier)