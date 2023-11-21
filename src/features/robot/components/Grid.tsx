import React from "react"
import { useSelector } from "react-redux"

import type { RootState } from "../../../store"
import GridCell from "./GridCell"

const Grid = (): JSX.Element => {
    const { rows, columns } = useSelector(
        (state: RootState) => state.robot.gridSize,
    )

    const rowArray: JSX.Element[] = []

    // we generate the grid per row
    // as the 0,0 coordinate is south west, we have to make sure to
    // generate the y coordinates in a reverse order
    for (let x = 0; x < rows; x++) {
        const cells: JSX.Element[] = []
        for (let y = columns - 1; y >= 0; y--) {
            cells.push(<GridCell x={x} y={y} key={`cell-${x},${y}`} />)
        }

        rowArray.push(
            <div className="gridRow" key={`row-${x}`}>
                {cells}
            </div>,
        )
    }

    return <div className="grid">{rowArray}</div>
}

export default Grid
