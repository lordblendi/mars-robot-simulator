import React from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../../store"

import { decrement, increment } from "../slice"

const Counter = (): JSX.Element => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>Counter: {count}</div>
            <div className="tw-flex tw-w-full">
                <button
                    className="tw-bg-white tw-p-1 tw-mx-1 tw-border-2 tw-border-solid tw-border-black"
                    onClick={(): void => {
                        dispatch(increment())
                    }}
                >
                    Increment
                </button>
                <button
                    className="tw-bg-white tw-p-1 tw-mx-1 tw-border-2 tw-border-solid tw-border-black"
                    onClick={(): void => {
                        dispatch(decrement())
                    }}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter
