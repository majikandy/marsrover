const parse = require('./parse')
const update = require('./update')

const marsControl = {
    execute: (input) =>
    {
        const instructions = parse(input);

        var output = "";
        var lastRobotPosition = null
        var lostRobots = []
        instructions.bots.forEach(bot => {
            lastRobotPosition = bot.moves.reduce((currentPos, move) => update(currentPos, move, instructions.gridSize, lostRobots), bot.position)
            output += lastRobotPosition.x + " " + lastRobotPosition.y + " " + lastRobotPosition.orientation + (lastRobotPosition.lost?" LOST":"") + "\n";
        });

        return output
    }
}

module.exports = marsControl