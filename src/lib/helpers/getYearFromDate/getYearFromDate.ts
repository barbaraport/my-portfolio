export function getYearFromDate(date?: Date): string {
	if (!date) return new Date().getUTCFullYear().toString();

	return new Date(date).getUTCFullYear().toString();
}
