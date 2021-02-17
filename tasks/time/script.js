const START = Date.now();
function someFn() {
	console.log('time', Date.now() - START);
	console.log('arg', arguments);
}

Fu nction.prototype.delay = function(ms) {
	console.log(this);
	return function() {
		console.log(this);
	};
};

const f = someFn.delay(500);
f('arg1', 'arg2', 1, 2);
