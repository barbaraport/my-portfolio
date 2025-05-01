import { describe, it, expect } from 'vitest';
import { getYearFromDate } from './getYearFromDate';
import { parseDateFromString } from '../parseDateFromString/parseDateFromString';

describe('tests getYearFromDate function', () => {
	it('second millennium', () => {
		const date = parseDateFromString('1901-01-01');
		const year = getYearFromDate(date);

		expect(year).toBe('1901');
	});

	it('third millennium', () => {
		const date = parseDateFromString('2001-01-01');
		const year = getYearFromDate(date);

		expect(year).toBe('2001');
	});

	it('fourth millennium', () => {
		const date = parseDateFromString('3001-01-01');
		const year = getYearFromDate(date);

		expect(year).toBe('3001');
	});

	it('f1 driver birth date', () => {
		const date = parseDateFromString('1960-03-21');
		const year = getYearFromDate(date);

		expect(year).toBe('1960');
	});

	it('f1 grand prix sprint', () => {
		const date = parseDateFromString('1994-05-01');
		const year = getYearFromDate(date);

		expect(year).toBe('1994');
	});

	it('f1 grand prix qualifying', () => {
		const date = parseDateFromString('1994-04-30');
		const year = getYearFromDate(date);

		expect(year).toBe('1994');
	});

	it('2025s Christmas', () => {
		const date = parseDateFromString('2025-12-25');
		const year = getYearFromDate(date);
		expect(year).toBe('2025');
	});

	it('february 29th leap year', () => {
		const date = parseDateFromString('2024-02-29');
		const year = getYearFromDate(date);
		expect(year).toBe('2024');
	});

	it('february 28th leap year', () => {
		const date = parseDateFromString('2024-02-28');
		const year = getYearFromDate(date);
		expect(year).toBe('2024');
	});
});
