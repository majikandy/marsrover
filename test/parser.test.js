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

        const result = parse(
`5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`)

        expect(result).toEqual(expectedOutput)
    })

    it('errors for bad format of instructions', () => {
        expect(() => { parse('xxxx\nxxx') }).toThrow("Bad format of instruction set")
    })
    it('errors for grid outside range 0-50', () => {
        expect(() => { parse(`51 0`) }).toThrow("Grid x, y must be within range 0-50")
        expect(() => { parse('-1') }).toThrow("Grid x, y must be within range 0-50")
        expect(() => { parse(`50 51`) }).toThrow("Grid x, y must be within range 0-50")
        expect(() => { parse('0 -1') }).toThrow("Grid x, y must be within range 0-50")
    })
    it('errors for robot start position outside range 0-50', () => {
        expect(() => { parse('50 50\n51 1 E\nR') }).toThrow("Robot x, y must be within range 0-50")
        expect(() => { parse('50 50\n50 51 E\nR') }).toThrow("Robot x, y must be within range 0-50")
        
    })
    it('errors for robot commands greater that 100 chars', () => {
        expect(() => { parse('1 1\n1 1 E\n' + 'R'.repeat(101)) })
        .toThrow("Robots can have a maximum of 100 commands")      
    })
})
