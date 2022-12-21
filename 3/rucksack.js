'use strict';

const {readInput} = require('../helper');

let total = 0;
readInput().forEach(line => {
	const compartmentOne = line.slice(0, line.length / 2);
	const compartmentTwo = line.slice(line.length / 2);

	for(let i = 0; i < compartmentOne.length; i++){
		const char = compartmentOne[i];

		if(compartmentTwo.indexOf(char) > -1){
			let value = char.charCodeAt(0) - 64;
			
			if(value > 26){
				//lowercase
				value -= 32;
			} else {
				value += 26;
			}

			total += value;
			break;
		}
	}
});

console.log(total);