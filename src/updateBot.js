// (state, action) => newState
const _ = require('underscore')

const updateBot = (currentPosition, move, gridSize, lostRobots) => {
    if (currentPosition.lost === true) {
        return currentPosition
    }
    
    switch (move) {
        case 'F': 
            var scentHere = lostRobots.some(function(lostRobot) { return _.isEqual(lostRobot, currentPosition)})
            if (scentHere) {
                return currentPosition
            }
            newPosition = forward(currentPosition)
            
            break
        case 'L': 
            newPosition = {
                ...currentPosition,
                orientation: left(currentPosition.orientation)
            }
            break
        case 'R': 
            newPosition = {
                ...currentPosition,
                orientation: right(currentPosition.orientation)
            }
            break
        //NOTE: comment here for purpose of coding challenge, new commands behaviour would go here.
        default: throw new Error("Direction " + move + " not supported.")
    }
    if (newPosition.x > gridSize.x || newPosition.y > gridSize.y) {
        newPosition = { ...currentPosition }
        lostRobots.push(currentPosition)
        newPosition.lost = true
    }
    return newPosition
}

const forward = (position) => {
    switch (position.orientation) {
        case 'N': return {...position, y: position.y + 1}
        case 'E': return {...position, x: position.x + 1}
        case 'S': return {...position, y: position.y - 1}
        case 'W': return {...position, x: position.x - 1}
    }
}

const left = (orientation) => {
    switch (orientation) {
        case 'N': return 'W'
        case 'E': return 'N'
        case 'S': return 'E'
        case 'W': return 'S'
    }
}

const right = (orientation) => {
    switch (orientation) {
        case 'N': return 'E'
        case 'E': return 'S'
        case 'S': return 'W'
        case 'W': return 'N'
    }
}


module.exports = updateBot