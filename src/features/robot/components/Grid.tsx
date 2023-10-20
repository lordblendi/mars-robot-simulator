import React from "react"

import GridCell from "./GridCell"

const Grid = (): JSX.Element => {
    const numberOfRows: number = 5
    const numberOfColumns: number = 5

    const rows: JSX.Element[] = []

    // we generate the grid per row
    // as the 0,0 coordinate is south west, we have to make sure to
    // generate the y coordinates in a reverse order
    for (let x = 0; x < numberOfRows; x++) {
        const cells: JSX.Element[] = []
        for (let y = numberOfColumns - 1; y >= 0; y--) {
            cells.push(<GridCell x={x} y={y} key={`cell-${x},${y}`} />)
        }

        rows.push(
            <div className="gridRow" key={`row-${x}`}>
                {cells}
            </div>,
        )
    }

    return <div className="grid">{rows}</div>
}

export default Grid
