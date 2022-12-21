'use strict';

const {readInput} = require('../helper');

function rangeContains(rangeOne, rangeTwo){
	return parseInt(rangeOne[0]) <= parseInt(rangeTwo[0]) && parseInt(rangeOne[1]) >= parseInt(rangeTwo[1]);
}

let count = 0;
readInput().forEach(line => {
	let [rangeOne, rangeTwo] = line.split(",");
	rangeOne = rangeOne.split("-");
	rangeTwo = rangeTwo.split("-");

	if(rangeContains(rangeOne, rangeTwo) || rangeContains(rangeTwo, rangeOne)){
		count++;
	}
});

console.log(count);