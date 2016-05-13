'use strict';

var Paser = require('cst').Parser;

var code = `
({
	42: 42
});
`;

var tree = new Paser().parse(code);

var objects = tree.selectTokensByType('ObjectExpression');

debugger;

console.log(objects.length); // 1 ? nope it's 0

