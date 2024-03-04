const pascalTriangle = require("../Pascal_Triangle/pascalTriangle.js")
describe('pascalTriangle', () => {
    test('returns an empty array if rowsNumber is less than or equal to 0', () => {
        expect(pascalTriangle(0)).toEqual([]);
        expect(pascalTriangle(-1)).toEqual([]);
    });

    test('returns the correct Pascal triangle for rowsNumber greater than 0', () => {
        expect(pascalTriangle(1)).toEqual([[1]]);
        expect(pascalTriangle(2)).toEqual([[1], [1, 1]]);
        expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    });
});