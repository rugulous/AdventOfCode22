'use strict';

const {readInput} = require('../helper');
const path = require('path');

const structure = {};
let currentPath = '';
let currentItem = null;

function findNodesBelowSize(node, size){
	let nodeList = [];
	const keys = Object.keys(node).filter(k => k != '_size');

	keys.forEach(k => {
		nodeList = nodeList.concat(findNodesBelowSize(node[k], size));
	});

	if(node._size < size){
		nodeList.push(node);
	}

	return nodeList;
}

function calculateSize(node){
	const keys = Object.keys(node).filter(k => k != '_size');

	keys.forEach(k => {
		node._size += calculateSize(node[k]);
	});

	return node._size;
}

function getCurrentPathItem(){
	const parts = currentPath.trim().split("\\");
	let obj = structure;

	if(parts.length == 2){
		if(parts[0].trim() == '' && parts[1].trim() == ''){
			parts.pop();
		}
	}

	for(let i = 0; i < parts.length; i++){
		const pathItem = parts[i] == '' ? '\\' : parts[i];

		if(!obj.hasOwnProperty(pathItem)){
			obj[pathItem] = {
				_size: 0
			};
		}

		obj = obj[pathItem];
	}

	return obj;
}

function processCommand(command){
	if(command[1] == 'cd'){
		currentPath = path.join(currentPath, command[2]);
		console.log(currentPath);
		currentItem = getCurrentPathItem();
	} else if(command[1] == 'ls'){
		//do nothing
	}
	
}

readInput().forEach(line => {
	const data = line.split(" ");
	if(data[0] == '$'){
		//we have a command
		processCommand(data);
		return;
	}

	if(data[0] == 'dir'){
		//nothing we can really do here...
		return;
	}

	currentItem._size += parseInt(data[0]);
});

calculateSize(structure);
const nodes = findNodesBelowSize(structure, 10000);
console.log(nodes.reduce((a,b) => a + b._size, 0));