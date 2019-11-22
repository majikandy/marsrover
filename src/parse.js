const parse = (input) => {
    let instructionsSet = {}

    try {
        const [rawGridSize, ...rawBots] = input.split('\n')
        const [gridX, gridY] = rawGridSize.split(" ").map(Number)
        
        const bots = rawBots.reduce((acc, rawBot, i) => 
            (i % 2 === 0) ? [...acc, parseBot(rawBots[i], rawBots[i+1])] : acc, [])

        instructionsSet =  {
            gridSize: {x: gridX, y: gridY},
            bots
        }
        
    } catch {
        throw new Error("Bad format of instruction set")
    }
    
    validate(instructionsSet)
    return instructionsSet
}

const parseBot = (line1, line2) => {
    const [x, y, orientation]  = line1.split(" ")
    const moves = line2.split('')

    return {
        position: { x: Number(x), y: Number(y), orientation },
        moves
    }
}

const validate = (instructions) => {
    if (0 > instructions.gridSize.x || instructions.gridSize.x > 50 ||  0 > instructions.gridSize.y || instructions.gridSize.y > 50) {
        throw new Error("Grid x, y must be within range 0-50")
    }
    if (instructions.bots.some((b) => b.position.x > 50 || b.position.y > 50)) {
        throw new Error("Robot x, y must be within range 0-50")
    }
    if (instructions.bots.some((b) => b.moves.length > 100)) {
        throw new Error("Robots can have a maximum of 100 commands")
    }
} 

module.exports = parse