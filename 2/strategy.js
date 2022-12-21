'use strict';

const {readInput} = require('../helper');

const outcomes = {
	A: {
		X: 3,
		Y: 6,
		Z: 0
	},
	B: {
		X: 0,
		Y: 3,
		Z: 6
	},
	C: {
		X: 6,
		Y: 0,
		Z: 3
	}
};

const moveScores = {
	X: 1,
	Y: 2,
	Z: 3
};

let score = 0;
readInput().forEach(line => {
	const moves = line.split(" ");

	const choices = outcomes[moves[0]];
	let targetScore;
	if(moves[1] === 'X'){
		targetScore = 0;
	} else if(moves[1] === 'Y'){
		targetScore = 3;
	} else {
		targetScore = 6;
	}

	Object.keys(choices).forEach(k => {
		if(choices[k] === targetScore){
			moves[1] = k;
		}
	});

	const outcome = outcomes[moves[0]][moves[1]];
	const moveScore = moveScores[moves[1]];
	score += outcome + moveScore;
});

console.log(score);