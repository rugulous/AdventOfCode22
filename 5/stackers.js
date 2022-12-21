'use strict';

const {readInput, isNumeric} = require('../helper');

function getStackSize(input){
	let index = 0;

	while(true){
		const line = input[index];
		if(isNumeric(line[1])){
			return {
				number: parseInt(line.trim().split(" ").pop()),
				maxSize: index
			};
		}
	
		index++;
	}
}

function initialiseStacks(input){
	const stackInfo = getStackSize(input);
	const stacks = [];

	for(let i = 0; i < stackInfo.number; i++){
		stacks.push([]);
	}

	for(let i = 0; i < stackInfo.maxSize; i++){
		const line = input[i];

		for(let j = 0; j < line.length; j += 4){
			const chunk = line.slice(j, j + 3);
			if(chunk.trim() != ''){
				stacks[j / 4].unshift(chunk);
			}
		}
	}

	return [stacks, stackInfo];
}

const input = readInput();

//extract initial configuratio
const [stacks, stackInfo] = initialiseStacks(input);
console.log(stacks);

for(let i = stackInfo.maxSize + 2; i < input.length; i++){
	const command = input[i].split(" ");

	const number = parseInt(command[1]);
	const src = parseInt(command[3]) - 1;
	const dest = parseInt(command[5]) - 1;

	for(let j = 0; j < number; j++){
		if(stacks[src].length === 0){
			break;
		}

		stacks[dest].push(stacks[src].pop());		
	}
}

let str = '';
for(let i = 0; i < stackInfo.number; i++){
	str += stacks[i].pop()[1];
}

console.log(str);