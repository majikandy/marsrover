const parse = require('./parse')
const updateGrid = require('./updateGrid')
const seralise = require('./serialiseFinalPositions')

const marsControl = {
    execute: (input) =>
    {
        const instructions = parse(input)
        const result = instructions.bots.reduce((previousBots, currentBot) => 
            updateGrid(currentBot, previousBots, instructions.gridSize), null)
        
        return seralise(result)
    }
}

module.exports = marsControl