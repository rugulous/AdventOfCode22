'use strict';

const fs = require('fs');

module.exports = {
	readInput(src = './input.txt'){
		return fs.readFileSync(src, {encoding:'utf8', flag:'r'}).replaceAll("\r","").split("\n");
	}
}