const parse = require('../src/parse')

describe("when parsing the input", () => {
    it("returns consumable data structure", () => {
        const expectedOutput = 
        {
            gridSize: {x: 5, y: 3},
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
        
        const input = 
`5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`

        const result = parse(input);
        expect(result).toEqual(expectedOutput);
    })

    // describe("when any input co-oridinate > 50 in the input", () => {
    //     it("errors with bad input", () => {

    //         const input = 
    //     `5 3
    //     1 1 E
    //     RFRFRFRF
    //     3 2 N
    //     FRRFLLFFRRFLL
    //     0 53 W
    //     LLFFFLFLFL`
    //     const result = parse(input);
    //     expect(result).toError(expectedOutput);
    // })
    // if any coordinate > 50 - bad input

     // describe("when instruction string > 100 chars in the input", () => {
    //     it("errors with bad input", () => {

    //         const input = 
    //     `5 3
    //     1 1 E
    //     RFRFRFRF
    //     3 2 N
    //     FRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRRFLLFRRFLLFFRR
    //     0 53 W
    //     LLFFFLFLFL`
    //     const result = parse(input);
    //     expect(result).toError(expectedOutput);
    // })
})
