pascalTriangle = (rowsNumber) => {
    let matrix = [];

    if (rowsNumber <= 0) {
        return matrix;
    }

    matrix = [[1]];

    for (let i = 1; i < rowsNumber; i++) {
        let temp = [1];
        for (let j = 0; j < matrix[i - 1].length - 1; j++) {
            temp.push(matrix[i - 1][j] + matrix[i - 1][j + 1]);
        }
        temp.push(1);
        matrix.push(temp);
    }
    return matrix;
};
console.log(pascalTriangle(6));

module.exports = pascalTriangle;
