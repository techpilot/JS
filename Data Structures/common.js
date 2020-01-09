function commonItem(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if(arr1[i] === arr2[j]) {
				return true;
			}
		}
		return false;
	}


const array1 = ['a','b','c','x']
const	array2 = ['z','y','a']

function commonItem2(arr1,arr2) {
	// loop 1st array and create obj where props ===array items
	// can we assume always 2 parameters

	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if(!map[array1[i]]) {
			const item = array1[i];
			map[item] = true;
		}
	}

	// repeat the same process for the 2nd array
	let map = {};
	for (let j = 0; j < arr1.length; j++) {
		if(map[array2[j]]) {
			const item = array2[j];
			map[item] = true;
		}
	}
}