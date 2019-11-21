// (state, action) => newState

const forwardX = (x, orientation) => {
    switch (orientation) {
        case 'N': return x
        case 'E': return x + 1
        case 'S': return x
        case 'W': return x - 1
    }
}

const forwardY = (y, orientation) => {
    switch (orientation) {
        case 'N': return y + 1
        case 'E': return y
        case 'S': return y - 1
        case 'W': return y
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
lostRobots = []

const update = (position, move, gridSize) => {

    if (position.lost === true) {
        return position
    }
    
    var newPosition = {}

    switch (move) {
        case 'F': 
            // TODO: make functionally pure rather than hacked check on global static list
            for (let index = 0; index < lostRobots.length; index++) {
                const lostRobot = lostRobots[index];
                if (position.x == lostRobot.x && position.y == lostRobot.y && position.orientation == lostRobot.orientation) {
                    return position
                }
            }

            newPosition = {
                ...position,
                x: forwardX(position.x, position.orientation),
                y: forwardY(position.y, position.orientation)
            }
            break
        case 'L': 
            newPosition = {
                ...position,
                orientation: left(position.orientation)
            }
            break
        case 'R': 
            newPosition = {
                ...position,
                orientation: right(position.orientation)
            }
            break
        default: throw new Error("Direction " + move + " not supported.")
    }
    if (newPosition.x > gridSize.x || newPosition.y > gridSize.y) {
        newPosition = { ...position }
        lostRobots.push(position)
        newPosition.lost = true
    }
    return newPosition
}

module.exports = update