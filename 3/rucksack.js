'use strict';

const {readInput, getValueFromChar} = require('../helper');

let total = 0;
readInput().forEach(line => {
	const compartmentOne = line.slice(0, line.length / 2);
	const compartmentTwo = line.slice(line.length / 2);

	for(let i = 0; i < compartmentOne.length; i++){
		const char = compartmentOne[i];

		if(compartmentTwo.indexOf(char) > -1){	
			total += getValueFromChar(char, {lowercaseLower: true});
			break;
		}
	}
});

console.log(total);