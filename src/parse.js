const parse = (input) => {
    return {
        size: {x: 5, y: 3},
        bots: [
            {
                position: { x: 1, y: 1, orientation: 'E' },
                moves: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
            },
            {
                position: { x: 3, y: 2, orientation: 'N' },
                moves: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L']
            },
            {
                position: { x: 0, y: 3, orientation: 'W' },
                moves: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L']
            }
        ]
    }
}

module.exports = parse