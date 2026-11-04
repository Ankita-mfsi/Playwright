import { expect } from '@playwright/test';

expect.extend({
    toBeGreaterThan(actual, expected) {
        const pass = actual > expected;

        return {
            pass,
            message: () =>
                `Expected ${actual} to be greater than ${expected}`
        };
    }
});
export { expect };