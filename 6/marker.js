'use strict';

const {readInput} = require('../helper');

const input = readInput()[0];

let index = -1;

for(let i = 0; i < input.length; i++){
	const chunk = input.slice(i, i + 14);
	
	let found = false;
	for(let j = 0; j < chunk.length; j++){
		if(chunk.indexOf(chunk[j]) != chunk.lastIndexOf(chunk[j])){
			found = true;
			break;
		} else {
			index = i + j;
		}
	}

	if(!found){
		console.log(index + 1);
		console.log(chunk);
		break;
	}
}