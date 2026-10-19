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
       name: 'Firefox iPhone',
      use: {
        ...devices['iPhone 13'],
        browserName: 'firefox',
    //         // viewport: {
    //         //     width: 500, height: 407
    //         // },

        }},
        // {
        // name: 'firefox',
        // use: {
        //     ...devices['Desktop Firefox'],
        //     viewport: {
        //         width: 500, height: 407
        //     },
        // }},
        // {
        //     name: 'webkit',
        //     use:{...devices['Desktop Safari']},
        // }
   ],

    });

