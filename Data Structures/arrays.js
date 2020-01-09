const strings = ['a', 'b', 'c', 'd'];
// push 
strings.push('e') // 0(1)
// pop
strings.pop() // 0(1)
// unshift: adds an item at the beginning of the array
strings.unshift('x')  // 0(n)-means the time depends on the number of items
// splice: add item at the specified index
strings.splice(2, 0, 'alien')  // 0(n/2): since we looped through half of the array



// STATIC ARRAYS
// int a[20] {1,2,3,...}  meaning that the array will hold maximum of 20 items

// new dynamic array
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index]
	}

	push(item) {
		this.data[this.length] = item;
		this.length++
		return this.length
	}

	pop() {
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}

	shiftItems(index) {
		for(let i = index; i < this.length-1; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--
	}
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('!')
newArray.delete(0)
newArray.push('are')
newArray.push('nice')
newArray.delete(1)
console.log(newArray);