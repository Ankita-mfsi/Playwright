import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: './tests',
    reporter: 'html',
    timeout: 40 * 1000,
    expect: {
        timeout: 50 * 1000
    },

    use: {
        headless: false,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use:{...devices['Desktop Safari']},
        }
   ],

});

