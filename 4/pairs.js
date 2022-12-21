'use strict';

const {readInput} = require('../helper');

function rangeContains(rangeOne, rangeTwo){
	const r1 = {
		start: parseInt(rangeOne[0]),
		end: parseInt(rangeOne[1])
	};

	const r2 = {
		start: parseInt(rangeTwo[0]),
		end: parseInt(rangeTwo[1])
	};

	return (r1.start <= r2.end && r1.end >= r2.start);
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