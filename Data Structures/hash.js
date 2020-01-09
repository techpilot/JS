// A hash function simply converts given parameter to another form of combinations
let user = {
	age: 30,
	name: 'Kylie',
	magic: true,
	scream: function() {
		console.log('chei!')
	}
}

user.spell = 'abra kadabra';
// console.log(user.scream())


// HASH TABLES
class HashTable {
	constructor(size){
		this.data = new Array(size);

	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key)
		if (!this.data[address]) {
			this.data[address] = [];
			// this.data[address].push([key, value])
			// console.log(this.data)
		}
		this.data[address].push([key, value])
		return this.data
	}

	get(key) {
		let address = this._hash(key)
		const currentBucket = this.data[address]
		// console.log(currentBucket)
		if (currentBucket) {
			for(let i = 0; i < currentBucket.length; i++) {
				if(currentBucket[i][0] === key) {
					return currentBucket[i][1]
				}
			}
		}
		return undefined
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if(this.data[i]) {
				// console.log(this.data[i][0][0])
				keysArray.push(this.data[i][0][0])
			}
		}
		return keysArray;
	}
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 540);
myHashTable.set('oranges', 350);
console.log(myHashTable.keys())