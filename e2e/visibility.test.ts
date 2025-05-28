import { expect, test } from '@playwright/test';

test('main components are visible', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByTestId('navbar')).toBeVisible();
	await expect(page.getByTestId('main-impact-phrase')).toBeVisible();
	await expect(page.getByTestId('about-me')).toBeVisible();
	await expect(page.getByTestId('footer')).toBeVisible();
});
