import { calculator, capitalize, reverseString, cipher, arrayAnalyzer } from './functionLibrary'

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 1 to equal 2', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
});

test('divides 42 / 7 to equal 6', () => {
    expect(calculator.divide(42, 7)).toBe(6);
});

test('multiplies 11 * 7 to equal 77', () => {
    expect(calculator.multiply(11, 7)).toBe(77);
});

test('capitalizes', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverses yrekabakery to yrekabakery', () => {
    expect(reverseString('yrekabakery')).toBe('yrekabakery');
});

test('ciphers AbCd to BcDe', () => {
    expect(cipher('AbCd', 1)).toBe('BcDe');
});

test('throws non-letter error', () => {
    expect(() => cipher('aBc+', 1)).toThrowError('Content includes non-letters, dummy!');
});

test('returns an average', () => {
    expect(arrayAnalyzer.arrMean([1, 2, 3])).toBe(2);
});

test('returns a minimum', () => {
    expect(arrayAnalyzer.arrMin([1, 2, 3])).toBe(1);
});

test('returns a maximum', () => {
    expect(arrayAnalyzer.arrMax([1, 2, 3])).toBe(3);
});

test('returns a length', () => {
    expect(arrayAnalyzer.arrLength([1, 2, 3])).toBe(3);
});

