'use strict';

const fs = require('fs');

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

		current.index += 1;
		current.total = 0;

		return;
	}

	current.total += parseFloat(i);
});

console.log(max);