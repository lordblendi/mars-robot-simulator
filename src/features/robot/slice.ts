import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface RobotState {
    robot: Robot
}

const initialState: RobotState = {
    robot: {
        position: {
            x: -1,
            y: -1,
        },
        direction: 0,
    },
}

export const robotSlice = createSlice({
    name: "robot",
    initialState,
    reducers: {
        move: (state) => {
            const { x, y } = state.robot.position

            if (x === -1 || y === -1) {
                return
            }

            switch (state.robot.direction) {
                // move north
                case 0:
                    if (y < 4) {
                        state.robot.position.y++
                    }
                    break
                // move east
                case 90:
                    if (x < 4) {
                        state.robot.position.x++
                    }
                    break
                // move south
                case 180:
                    if (y > 0) {
                        state.robot.position.y--
                    }
                    break
                // move west
                case 270:
                    if (x > 0) {
                        state.robot.position.x--
                    }
                    break

                default:
                    break
            }
        },

        // since we want to use the same position and direction structure
        // that the robot already has, we can reuse that interface
        place: (state, action: PayloadAction<Robot>) => {
            state.robot = action.payload
        },

        turn: (state, action: PayloadAction<90 | -90>) => {
            const { x, y } = state.robot.position

            if (x === -1 || y === -1) {
                return
            }

            // we'd get here either 90 or -90 when we turn right or left
            const degrees = action.payload

            // make sure we don't have > 360
            let newDirection = (state.robot.direction + degrees) % 360
            // we should also not store < 0
            if (newDirection < 0) {
                newDirection += 360
            }

            state.robot.direction = newDirection
        },
    },
})

// Action creators are generated for each case reducer function
export const { turn, place, move } = robotSlice.actions

export default robotSlice.reducer
