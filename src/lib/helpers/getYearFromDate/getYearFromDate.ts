export function getYearFromDate(date?: Date | string): number {
	if (!date) return new Date().getFullYear();

	return new Date(date).getFullYear();
}
