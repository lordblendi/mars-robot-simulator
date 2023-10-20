import React from "react"
import { useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"

import type { RootState } from "../../../store"

const ControlPanel = (): JSX.Element => {
    const { position } = useSelector((state: RootState) => state.robot.robot)

    const [command, setCommand] = React.useState("")
    const [message, setMessage] = React.useState("To start place your robot on the desk.")

    const onKeyUp = React.useCallback(
        ({ key, target }: React.KeyboardEvent<HTMLInputElement>): void => {
            if (key === "Enter") {
                console.log(event)
                console.log(target)
                console.log(target)
            }
        },
        [],
    )

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setCommand(event.target.value)
        },
        [],
    )

    return (
        <div className=" tw-my-1 tw-p-3 tw-rounded tw-border-dashed tw-border tw-border-gray-300">
            <h3 className="tw-pb-2">
                What would you like to do with the robot?
            </h3>

            <input
                className="tw-p-1 tw-border tw-border-gray-600 tw-rounded tw-w-full"
                onChange={onChange}
                onKeyUp={onKeyUp}
                placeholder="Type in a command and press enter"
            />

            {!!message && (
                <div className="tw-my-4 tw-py-2 tw-border tw-rounded tw-p-2 tw-text-gray-700">
                    <FontAwesomeIcon icon={faComment} />
                    &nbsp;
                    {message}
                </div>
            )}
        </div>
    )
}

export default ControlPanel
