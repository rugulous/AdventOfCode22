'use strict';

const fs = require('fs');

const elves = [];

const max = {
	index: -1,
	total: -1
};

const current = {
	index: 0,
	total: 0
};

const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'}).replaceAll("\r","").split("\n");
input.forEach(i => {
	if(i.trim() === ""){
		if(current.total > max.total){
			max.index = current.index;
			max.total = current.total;
		}

		elves.push(current.total);

		current.index += 1;
		current.total = 0;

		return;
	}

	current.total += parseFloat(i);
});

elves.sort((a,b) => b - a);

console.log(`The elf with the most calories is Elf number ${max.index}, carrying ${max.total} calories`);
console.log(`The top 3 elves are carrying ${elves[0]}, ${elves[1]} and ${elves[2]} calories, with a total of ${elves.splice(0, 3).reduce((a,b) => a + b, 0)}`);