const serialise = (bot, outputString = '') =>
{
    let stringToReturn = outputString
    
    if (bot.previousBot) {
        stringToReturn = serialise(bot.previousBot, outputString)
    }
    return `${stringToReturn}${(bot.previousBot?"\n":"")}${bot.finalPosition.x} ${bot.finalPosition.y} ${bot.finalPosition.orientation}${bot.finalPosition.lost?" LOST":""}`
}

module.exports = serialise