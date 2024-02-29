const ticTacToe  = require('../TicTacToe/ticTacToe.js');

describe('Tic tac toe function', () => {
    test('Player A wins', () => {
        const moves = [[0,0],[2,0],[1,1],[2,1],[2,2]];
        expect(ticTacToe(moves)).toBe("Player A");
    });
    test('Player B wins', () => {
        const moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]];
        expect(ticTacToe(moves)).toBe("Player B");
    });
    test('Game ends in a draw', () => {
        const moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];
        expect(ticTacToe(moves)).toBe("Draw");
    });
    test('Game is pending', () => {
        const moves = [[0,0],[1,1],[0,1],[0,2]];
        expect(ticTacToe(moves)).toBe("Pending");
    });
})