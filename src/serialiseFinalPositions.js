const serialise = (bot, outputString = '') =>
{
    if (bot.previousBot) {
        outputString = serialise(bot.previousBot, outputString)
    }
    outputString += (bot.previousBot?"\n":"") + bot.finalPosition.x + " " + bot.finalPosition.y + " " + bot.finalPosition.orientation + (bot.finalPosition.lost?" LOST":"")
    
    return outputString
}

module.exports = serialise