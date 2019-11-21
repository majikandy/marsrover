const updateBot = require('./updateBot')

const updateGrid = (currentBot, previousBot, gridSize) => {
    currentBot.previousBot = previousBot
    
    currentBot.finalPosition = currentBot.moves.reduce(
        (currentPosition, move) => updateBot(currentPosition, move, gridSize, getLostBotScents(previousBot, [])),
        currentBot.position)

    return currentBot
}

const getLostBotScents = (bot, lostBots) =>
{
    if (!bot) {
        return lostBots
    }
    if (bot.finalPosition.lost === true) {
        scent = {...bot.finalPosition}
        delete scent.lost // note: this is to make the comparison between current bot and scent easy
        lostBots.push(scent)
    }
    if (bot.previousBot) {
        lostBots = getLostBotScents(bot.previousBot, lostBots)
    }
    return lostBots;
}

module.exports = updateGrid