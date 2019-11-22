
const _ = require('underscore')

const updateBot = (currentPosition, move, gridSize, lostRobotScents) => {
    if (currentPosition.lost) {
        return currentPosition
    }
    
    switch (move) {
        case 'F': 
            if (hasScentAtCurrentPositionAndOrientation(lostRobotScents, currentPosition)) {
                return currentPosition
            }

            let position = forward(currentPosition)

            if (isOutsideGrid(position, gridSize)) {
                position = { ...currentPosition, lost: true }
            }
            return position
        case 'L': 
            return { ...currentPosition, orientation: left(currentPosition.orientation)
            }
        case 'R': 
            return { ...currentPosition, orientation: right(currentPosition.orientation)
            }
        default: throw new Error("Direction " + move + " not (yet) supported.")
    }
}

const hasScentAtCurrentPositionAndOrientation = (scents, position) => 
    scents.some((lostRobot) => _.isEqual(lostRobot, position))

const isOutsideGrid = (newPosition, gridSize) => 
    newPosition.x > gridSize.x || 
    newPosition.y > gridSize.y || 
    newPosition.x < 0 || 
    newPosition.y < 0

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