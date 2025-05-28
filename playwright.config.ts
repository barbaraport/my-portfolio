import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'e2e',
	reporter: [['html', { outputFolder: 'playwright-report', open: 'on-failure' }]]
});
