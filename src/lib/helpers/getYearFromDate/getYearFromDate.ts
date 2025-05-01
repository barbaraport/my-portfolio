export function getYearFromDate(date?: Date): string {
	if (!date) return new Date().getFullYear().toString();

	return new Date(date).getFullYear().toString();
}
