const { generateRandomString, filterChars, filterNumbers, alphanumericStringSort } = require('./yourFileName.js');

// Importing the necessary functions from the file you're testing

describe('generateRandomString', () => {
  test('should generate a random string of specified length', () => {
    const result = generateRandomString(10);
    expect(result).toHaveLength(10);
  });
});

describe('filterChars', () => {
  test('should filter characters based on the given character set', () => {
    const inputString = "abcd1234!@#$";
    const charset = "abcd";
    const result = filterChars(inputString, charset);
    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('filterNumbers', () => {
  test('should filter out even and odd numbers separately', () => {
    const inputString = "123456";
    const result = filterNumbers(inputString);
    expect(result).toEqual(['2', '4', '1', '3', '5']);
  });
});

describe('alphanumericStringSort', () => {
  test('should return a sorted string with characters grouped accordingly', () => {
    const result = alphanumericStringSort();
    // Write your assertions here based on the expected output
  });
});
