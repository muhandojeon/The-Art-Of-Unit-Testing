import { oneUpperCaseRule } from './password-rules';

describe('oneUpperCaseRule', () => {
    test('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('abc');
        expect(result.passed).toEqual(false);
    });

    test('given one uppercase, it passes', () => {
        const result = oneUpperCaseRule('Abc');
        expect(result.passed).toEqual(true);
    });

    test('given multiple uppercase, it passes', () => {
        const result = oneUpperCaseRule('aBC');
        expect(result.passed).toEqual(true);
    });
}); 

// test.each 사용해보기
describe('oneUpperCaseRule', () => {
    test('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('abc');
        expect(result.passed).toEqual(false);
    });

    test.each(['Abc', 'aBC'])('given one uppercase, it passes', (input) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(true);
    });
}); 

// 테스트 기댓값까지 test.each 사용해보기
describe('oneUpperCaseRule', () => {
    test.each([
        ['Abc', true],
        ['aBC', true],
        ['abc', false],
    ])('given %s, it %s', (input, expected) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(expected);
    });
}); 

// for문을 사용한 테스트 중복 없애기
describe('oneUpperCaseRule', () => {
    const tests = {
        'Abc': true,
        'aBC': true,
        'abc': false,
    }

    for (const [input, expected] of Object.entries(tests)) {
        test(`given ${input}, it ${expected}`, () => {
            const result = oneUpperCaseRule(input);
            expect(result.passed).toEqual(expected);
        });
    }
}); 

