import React from "react"
import { useSelector } from "react-redux"

import type { RootState } from "../../../store"

import Robot from "./Robot"

interface Props extends Position {}

const GridCell = ({ x, y }: Props): JSX.Element => {
    const { position } = useSelector((state: RootState) => state.robot.robot)

    const showRobot = position.x === x && position.y === y

    return (
        <div className="gridCell">
            {showRobot ? (
                <Robot />
            ) : (
                <span className="tw-text-gray-300 tw-text-xs">
                    ({x},{y})
                </span>
            )}
        </div>
    )
}

export default GridCell
