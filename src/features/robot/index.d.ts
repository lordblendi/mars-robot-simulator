interface Robot {
    position: Position
    degree: number // this will be degrees between 0 and 359
}

interface Position {
    x: number
    y: number
}

interface GridSize {
    rows: number
    columns: number
}
