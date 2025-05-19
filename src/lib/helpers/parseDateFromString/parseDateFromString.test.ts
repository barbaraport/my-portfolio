import { describe, it, expect } from 'vitest';
import { parseDateFromString } from './parseDateFromString';

describe('tests parseDateFromString function', () => {
	it('should parse a valid date string', () => {
		const date = parseDateFromString('2023-10-05');

		expect(date.getFullYear()).toBe(2023);
		expect(date.getMonth()).toBe(9); // Months are 0-indexed
		expect(date.getDate()).toBe(5);
	});

	it('should correctly parse date strings from project', () => {
		let date = parseDateFromString('2020-01-01');

		expect(date.getFullYear()).toBe(2020);
		expect(date.getMonth()).toBe(0); // Months are 0-indexed
		expect(date.getDate()).toBe(1);

		date = parseDateFromString('2022-12-31');

		expect(date.getFullYear()).toBe(2022);
		expect(date.getMonth()).toBe(11); // Months are 0-indexed
		expect(date.getDate()).toBe(31);

		date = parseDateFromString('2017-01-01');

		expect(date.getFullYear()).toBe(2017);
		expect(date.getMonth()).toBe(0); // Months are 0-indexed
		expect(date.getDate()).toBe(1);

		date = parseDateFromString('2019-12-31');

		expect(date.getFullYear()).toBe(2019);
		expect(date.getMonth()).toBe(11); // Months are 0-indexed
		expect(date.getDate()).toBe(31);
	});

	it('should handle a leap year date correctly', () => {
		const date = parseDateFromString('2020-02-29');

		expect(date.getFullYear()).toBe(2020);
		expect(date.getMonth()).toBe(1); // February is month 1 (0-indexed)
		expect(date.getDate()).toBe(29);
	});

	it('february 29th non-leap year', () => {
		expect(() => parseDateFromString('2023-02-29')).toThrow();
	});

	it('should handle a date with single-digit month and day', () => {
		const date = parseDateFromString('2023-01-05');

		expect(date.getFullYear()).toBe(2023);
		expect(date.getMonth()).toBe(0); // January is month 0 (0-indexed)
		expect(date.getDate()).toBe(5);
	});

	it('should handle invalid date strings gracefully', () => {
		expect(() => parseDateFromString('invalid-date')).toThrow();
		expect(() => parseDateFromString('2023-13-01')).toThrow();
		expect(() => parseDateFromString('2023-02-30')).toThrow();
	});

	it('should handle an empty string as input', () => {
		expect(() => parseDateFromString('')).toThrow();
	});
});
