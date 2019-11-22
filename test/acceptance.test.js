const marsControl = require('../src')

describe("the mars rover control", () => {
    it("reports the final position of the robots ignoring a command which would lose contact when on the scent of a lost robot", () => {
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

describe("the mars rover control with another input", () => {
    it("can handle falling off the grid at 0 in x and y", () => {
        const expectedOutput = 
`0 0 W LOST
0 0 S LOST`
        
        const input = 
`5 5
0 0 W
F
0 0 S
F`

        const result = marsControl.execute(input);
        expect(result).toEqual(expectedOutput);
    })
})