const logname = require('..');

// This prints a string similar to 'test.YYYY-MM-DD-HH-mm-ss.log'
console.log(logname(new Date(), {
	basename: 'example'
}));
