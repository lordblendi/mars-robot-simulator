import React from "react"

const CommandList = (): JSX.Element => {
    return (
        <div className=" tw-my-1 tw-p-3 tw-rounded tw-border-dashed tw-border tw-border-gray-300 tw-w-2/3">
            <h2 className="tw-pb-2">Command Palette</h2>

            <ul className="tw-list-disc tw-list-inside">
                <li>
                    <b>PLACE X,Y,F</b> - put the toy robot on the table in
                    position X,Y and facing NORTH, SOUTH, EAST or WEST.
                </li>
                <li>
                    <b>MOVE</b> - move the toy robot one unit forward in the
                    direction it is currently facing.
                </li>
                <li>
                    <b>LEFT</b> - rotate the robot - 90 degrees
                </li>
                <li>
                    <b>RIGHT</b> - rotate the robot 90 degrees
                </li>
                <li>
                    <b>REPORT</b> - announce the position and the direction of
                    the robot
                </li>
            </ul>
        </div>
    )
}

export default CommandList
