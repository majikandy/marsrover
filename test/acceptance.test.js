const marsControl = require('../src')

describe("the mars rover control", () => {
    it("reports the final position of the robots", () => {
        const expectedOutput = 
`1 1 E
3 3 N LOST
2 3 S`
        
        const input = 
`5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`

        const result = marsControl.execute(input);
        expect(result).toEqual(expectedOutput);
    })
})