const parseBot = (line1, line2) => {
    const [x, y, orientation]  = line1.split(" ")
    const moves = line2.split('')

    return {
        position: { x: Number(x), y: Number(y), orientation },
        moves
    }
}

const parse = (input) => {

    var [rawGridSize, ...rawBots] = input.split('\n')
    var [gridX, gridY] = rawGridSize.split(" ").map(Number)
    
    var bots = []
    for (let i = 0; i < rawBots.length; i = i+2) {
        bots.push(parseBot(rawBots[i], rawBots[i+1]));
    }

    return {
        gridSize: {x: gridX, y: gridY},
        bots
    }
}

module.exports = parse