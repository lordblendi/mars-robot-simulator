import React from "react"
import { useSelector } from "react-redux"

import type { RootState } from "../../../store"

import Robot from "./Robot"

interface Props extends Position {}

const GridCell = ({ x, y }: Props): JSX.Element => {
    const { position } = useSelector((state: RootState) => state.robot.robot)

    const showRobot = position.x === x && position.y === y

    const background = (x + y) % 2 === 0 ? "light" : "dark"

    return (
        <div className={`gridCell gridCell--${background}`}>
            {showRobot ? (
                <Robot />
            ) : (
                <span>
                    ({x},{y})
                </span>
            )}
        </div>
    )
}

export default GridCell
