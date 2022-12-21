'use strict';

const {readInput, getValueFromChar} = require('../helper');

const input = readInput();
let total = 0;

for(let i = 0; i < input.length; i += 3){
	for(let j = 0; j < input[i].length; j++){
		const char = input[i][j];

		if(input[i + 1].indexOf(char) > -1 && input[i + 2].indexOf(char) > -1){
			const value = getValueFromChar(char, {lowercaseLower: true});
			total += value;
			break;
		}
	}
}

console.log(total);