// Common JS
var module1 = require('module1')
var module2 = require('module2')

function fight() {}
module.exports = {
	fight: fight
}

// AMD
define(['module1', 'module2'],
	function (module1Import, module2Import) {
		var fight = module1Import.fight;
		var module2 = module2Import

		function dance() {}
		return {
			dance: dance
		}
	})



// IIFE: reduces globa name variable pollution, code reusability
// Module Pattern
var fightModule = (function() {  
	var harry = 'potter'
	var voldemort = 'He who must not be named'

	function fight(char1, char2) {
		var attack1 = Math.floor(Math.random() * char1.length);
		var attack2 = Math.floor(Math.random() * char2.length) ;
		console.log(attack1)
		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
	}
	return {
		fight: fight
	}
})()
