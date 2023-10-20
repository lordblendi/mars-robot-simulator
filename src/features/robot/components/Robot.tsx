import React from "react"
import { useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons"

import type { RootState } from "../../../store"

const Robot = (): JSX.Element => {
    const { direction } = useSelector((state: RootState) => state.robot.robot)

    // I've chosen an icon that is by default pointing to the right
    // thus I have to adjust it
    // this type is define dby the FontAwesome package I'm using
    let rotation: 90 | 180 | 270 | undefined
    switch (direction) {
        // north
        case 0:
            rotation = 270
            break
        // west
        case 270:
            rotation = 180
            break
        //south
        case 180:
            rotation = 90
            break
        // east
        case 90:
        default:
            rotation = undefined
            break
    }

    return (
        <FontAwesomeIcon icon={faShuttleSpace} size="xl" rotation={rotation} />
    )
}

export default Robot
