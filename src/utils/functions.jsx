export function pluralForm(count, one = 'штука', two_four = 'штуки', five_other = 'штук') {
	if (count != Math.round(count)) {
		if (count < 5) {
			return two_four;
		}

		count = Math.round(count);
	}

	if (count > 100) {
		count %= 100;
	}

	let ending = count % 10;

	if ((count > 20 && ending == 1) || count == 1) {
		return one;
	} else if ((count > 20 && [2, 3, 4].indexOf(ending) >= 0) || [2, 3, 4].indexOf(count) >= 0) {
		return two_four;
	} else {
		return five_other;
	}
}
