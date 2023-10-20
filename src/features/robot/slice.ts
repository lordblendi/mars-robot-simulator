import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface RobotState {
    robot: Robot
    message: string
}

const initialState: RobotState = {
    robot: {
        position: {
            x: -1,
            y: -1,
        },
        degree: 0,
    },
    message: "To start place your robot on the desk.",
}

const convertDegreeToWord = (direction: number): string => {
    switch (direction) {
        case 0:
            return "NORTH"
        case 90:
            return "EAST"
        case 180:
            return "SOUTH"
        default:
            return "WEST"
    }
}

export const robotSlice = createSlice({
    name: "robot",
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
        move: (state) => {
            const {
                degree,
                position: { x, y },
            } = state.robot

            if (x === -1 || y === -1) {
                return
            } else if (degree === 0 && y < 4) {
                state.robot.position.y++
                state.message = "The robot moved towards NORTH."
                return
            } else if (degree === 90 && x < 4) {
                state.robot.position.x++
                state.message = "The robot moved towards EAST."
                return
            } else if (degree === 180 && y > 0) {
                state.robot.position.y--
                state.message = "The robot moved towards SOUTH."
                return
            } else if (degree === 270 && x > 0) {
                state.robot.position.x--
                state.message = "The robot moved towards WEST."
                return
            }

            // we only end up here if we couldn't move
            state.message =
                "The robot cannot move, as it would fall off the table."
        },

        // I expect the position like [0-4],[0-4],(north|east|south|west)
        // we make sure that the parameters are correct when we parse the commands
        // thus we don't need to doublecheck it here
        place: (state, action: PayloadAction<string>) => {
            const parameters = action.payload.split(",")

            state.robot.position.x = parseInt(parameters[0])
            state.robot.position.y = parseInt(parameters[1])

            switch (parameters[2]) {
                case "north":
                    state.robot.degree = 0
                    break
                case "east":
                    state.robot.degree = 90
                    break
                case "south":
                    state.robot.degree = 180
                    break
                case "west":
                    state.robot.degree = 270
                    break
            }

            state.message = `The robot was placed on the table in position ${parameters}.`
        },

        report: (state) => {
            const { x, y } = state.robot.position

            const direction = convertDegreeToWord(state.robot.degree)
            state.message = `The current position is (${x},${y}) facing ${direction}.`
        },

        turn: (state, action: PayloadAction<90 | -90>) => {
            const { x, y } = state.robot.position

            if (x === -1 || y === -1) {
                return
            }

            // we'd get here either 90 or -90 when we turn right or left
            const degrees = action.payload

            // make sure we don't have > 360
            let newDirection = (state.robot.degree + degrees) % 360
            // we should also not store < 0
            if (newDirection < 0) {
                newDirection += 360
            }

            state.robot.degree = newDirection
            const direction = convertDegreeToWord(newDirection)
            state.message = `The current position is (${x},${y}) facing ${direction}.`
        },
    },
})

// Action creators are generated for each case reducer function
export const { move, place, report, setMessage, turn } = robotSlice.actions

export default robotSlice.reducer
