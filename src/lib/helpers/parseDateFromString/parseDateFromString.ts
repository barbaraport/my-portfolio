export function parseDateFromString(date: string): Date {
	if (!date) {
		throw new Error('Date is empty or undefined');
	}

	const splitDate = date.split('-');

	if (splitDate.length !== 3) {
		throw new Error(`Invalid date format: '${date}'. The format should be YYYY-MM-DD`);
	}

	const year = parseInt(splitDate[0]);
	const month = parseInt(splitDate[1]) - 1;
	const day = parseInt(splitDate[2]);

	if (isNaN(new Date(year, month, day).getTime())) {
		throw new Error(`Invalid date: ${date}`);
	}

	if (!new Date(year, month, day).toISOString().includes(date)) {
		throw new Error(`Invalid date: ${date}`);
	}

	return new Date(year, month, day);
}
