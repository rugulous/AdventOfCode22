'use strict';

const fs = require('fs');

module.exports = {
	readInput(src = './input.txt'){
		return fs.readFileSync(src, {encoding:'utf8', flag:'r'}).replaceAll("\r","").split("\n");
	},

	getValueFromChar(char, config = {}){
		if(config.caseInsensitive){
			char = char.toLowerCase();
		}

		let value = char.charCodeAt(0) - 64;
		if(config.lowercaseLower){
			if(value > 26){
				//lowercase
				value -= 32;
			} else {
				value += 26;
			}
		}

		return value;
	}
}