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
	const outcome = outcomes[moves[0]][moves[1]];
	const moveScore = moveScores[moves[1]];
	score += outcome + moveScore;
});

console.log(score);