function luhn(value) {
    var check = 0 
    var digit = 0
    var even = false;

	for (var i = value.length - 1; i >= 0; i--) {
		var cDigit = value[i],
		digit = parseInt(cDigit, 10);

		if (even) {
			if ((digit *= 2) > 9) digit -= 9;
		}

		check += digit;
		even = !even;
	}

	return (check % 10) == 0;
}

module.exports = luhn;