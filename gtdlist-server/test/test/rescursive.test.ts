import {describe, expect, test} from '@jest/globals';

//check if tester it self works, because this obvious.
function sum(a: number, b: number): number {
    return a + b;
}

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});