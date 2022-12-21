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
	},

	isNumeric(str){
		if (typeof str != "string") return false // we only process strings!  
		return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
			   !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
	}
}