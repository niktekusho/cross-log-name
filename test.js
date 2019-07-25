const getLogName = require('.');

const appFullLogName = /app\.\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.log$/;
const appShortLogName = /app\.\d{4}-\d{2}-\d{2}\.log$/;

describe('Core library testing', () => {
	it('with default arguments, it should return a name similar to "app.2019-07-25-15-00-00.log"', () => {
		expect(getLogName()).toMatch(appFullLogName);
	});

	it('with a specified date, it should return a name similar to "app.2019-07-25-15-00-00.log"', () => {
		expect(getLogName(new Date())).toMatch(appFullLogName);
	});

	it('with number 0, it should return a name similar to "app.2019-07-25-15-00-00.log"', () => {
		expect(getLogName(0)).toMatch(appFullLogName);
	});

	it('with includeTime set to false, it should return a name similar to "app.2019-07-25.log"', () => {
		expect(getLogName(null, {
			includeTime: false
		})).toMatch(appShortLogName);
	});

	it('with basename set to \'test\', it should return a name similar to "test.2019-07-25-15-00-00.log"', () => {
		const testFullLogName = /test\.\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.log$/;
		expect(getLogName(null, {
			basename: 'test'
		})).toMatch(testFullLogName);
	});

	it('with dateDelimiter set to \'.\', it should return a name similar to "app.2019.07.25.15.00.00.log"', () => {
		const dottedLogName = /app\.\d{4}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.log$/;
		expect(getLogName(null, {
			dateDelimiter: '.'
		})).toMatch(dottedLogName);
	});

	it('with extension set to \'.txt\', it should return a name similar to "app.2019-07-25-15-00-00.txt"', () => {
		const customExtensionLogName = /app\.\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.txt$/;
		expect(getLogName(null, {
			extension: '.txt'
		})).toMatch(customExtensionLogName);
	});

	it('with nameDelimiter set to \'_\', it should return a name similar to "app_2019-07-25-15-00-00.log"', () => {
		const customNameDelimiterLogName = /app_\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.log$/;
		expect(getLogName(null, {
			nameDelimiter: '_'
		})).toMatch(customNameDelimiterLogName);
	});

	it('with a negative number, it should throw a TypeError', () => {
		expect(() => getLogName(-10)).toThrowError(new TypeError('Expected a positive number.'));
	});

	it('with Infinity, it should throw a TypeError', () => {
		expect(() => getLogName(Infinity)).toThrowError(new TypeError('Expected a finite number.'));
	});

	it('with a decimal number, it should throw a TypeError', () => {
		expect(() => getLogName(3.4)).toThrowError(new TypeError('Expected an integer number.'));
	});

	it('with a string, it should throw a TypeError', () => {
		expect(() => getLogName('2019-07-25')).toThrowError(new TypeError('Expected either a Date object or an integer.'));
	});
});
