import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"

import type { RootState } from "../../../store"
import { move, place, report, setMessage, turn } from "../slice"

const ControlPanel = (): JSX.Element => {
    const {
        robot: {
            position: { x, y },
        },
        message,
    } = useSelector((state: RootState) => state.robot)
    const dispatch = useDispatch()

    const [command, setCommand] = React.useState("")

    const onKeyUp = React.useCallback(
        ({ key }: React.KeyboardEvent<HTMLInputElement>): void => {
            if (key === "Enter") {
                const lowerCaseCommand = command.toLowerCase()

                const placeCommandRegex =
                    /^place [0-4],[0-4],(north|east|south|west)$/

                const isRobotOnTable = x >= 0 && y >= 0

                // we only accept the place command
                if (lowerCaseCommand.startsWith("place")) {
                    if (lowerCaseCommand.match(placeCommandRegex)) {
                        const parameters = lowerCaseCommand.split(" ")[1]
                        dispatch(place(parameters))
                        setCommand("")
                    } else {
                        dispatch(setMessage("Invalid command."))
                    }
                }
                // unless the robot is on the table already
                else if (isRobotOnTable) {
                    if (lowerCaseCommand === "report") {
                        dispatch(report())
                        setCommand("")
                    } else if (lowerCaseCommand === "move") {
                        dispatch(move())
                        setCommand("")
                    } else if (lowerCaseCommand === "left") {
                        dispatch(turn(-90))
                        setCommand("")
                    } else if (lowerCaseCommand === "right") {
                        dispatch(turn(90))
                        setCommand("")
                    } else {
                        dispatch(setMessage("Invalid command."))
                    }
                } else {
                    dispatch(
                        setMessage(
                            "You have to place the robot on the table first.",
                        ),
                    )
                }
            }
        },
        [command, x, y],
    )

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setCommand(event.target.value)
        },
        [],
    )

    return (
        <div className=" tw-my-1 tw-p-3 tw-rounded tw-border-dashed tw-border tw-border-gray-300 tw-w-1/3">
            <h3 className="tw-pb-2">
                What would you like to do with the robot?
            </h3>

            <input
                autoFocus
                className="tw-p-1 tw-border tw-border-gray-600 tw-rounded tw-w-full"
                onChange={onChange}
                onKeyUp={onKeyUp}
                placeholder="Type in a command and press enter"
                value={command}
            />

            <div className="tw-my-4 tw-py-2 tw-border tw-rounded tw-p-2 tw-text-gray-700">
                <FontAwesomeIcon icon={faComment} />
                &nbsp;
                {message}
            </div>
        </div>
    )
}

export default ControlPanel
