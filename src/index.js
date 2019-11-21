const parse = require('./parse')
const updateGrid = require('./updateGrid')
const seralise = require('./serialiseFinalPositions')

const util = require('util')

const marsControl = {
    execute: (input) =>
    {
        const instructions = parse(input);
        var result = instructions.bots.reduce((previousBots, currentBot) => updateGrid(currentBot, previousBots, instructions.gridSize), null)
        //console.log(util.inspect(result,false, null, true))
        //console.log(seralise(result))
        return seralise(result)
    }
}

module.exports = marsControl