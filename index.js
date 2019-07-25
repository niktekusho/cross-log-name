/*
 1. Object.prototype.toString.call(date) returns a native string representation of the given object type - In our case "[object Date]".        Because date.toString() overrides its parent method, we need to .call or .apply the method from Object.prototype directly which bypasses user-defined object type with the same constructor name (e.g.: "Date")
 2. !isNaN(date) finally checks whether the value was not an Invalid Date.
 */
function isValidDate(date) {
	return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}

function adjustNumber(num) {
	if (num >= 10) {
		return String(num);
	}

	return `0${num}`;
}

function calcMonth(date) {
	const month = date.getMonth() + 1;
	return adjustNumber(month);
}

const typeConversion = {
	number: arg => {
		if (!Number.isFinite(arg)) {
			throw new TypeError('Expected a finite number.');
		}

		if (!Number.isInteger(arg)) {
			throw new TypeError('Expected an integer number.');
		}

		if (arg < 0) {
			throw new TypeError('Expected a positive number.');
		}

		return new Date(arg);
	}
};

module.exports = (date, {
	basename = 'app',
	dateDelimiter = '-',
	extension = '.log',
	includeTime = true,
	nameDelimiter = '.'
} = {}) => {
	let _date = null;

	// The user can pass in nothing: in this case use the "now" Date
	if (date === null || date === undefined) {
		_date = new Date();
	} else {
		const dateType = typeof date;
		// When the user passes an object, we need to check if it is a valid Date object (or try to build a Date from it)

		if (typeConversion[dateType]) {
			// Case 1: date is a timestamp (numeric)
			_date = typeConversion[dateType](date);
		} else if (isValidDate(date)) {
			// Case 3: date is an object: let's accept it only if it is a valid Date object
			_date = date;
		} else {
			throw new TypeError('Expected either a Date object or an integer.');
		}
	}

	const dateSegments = [
		_date.getFullYear(),
		calcMonth(_date),
		adjustNumber(_date.getDate())
	];

	if (includeTime) {
		dateSegments.push(
			adjustNumber(_date.getHours()),
			adjustNumber(_date.getMinutes()),
			adjustNumber(_date.getSeconds())
		);
	}

	const datePart = dateSegments.join(dateDelimiter);

	return `${basename}${nameDelimiter}${datePart}${extension}`;
};
