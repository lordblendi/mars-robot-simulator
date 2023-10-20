import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"

import { store } from "./store"

import CommandList from "./features/robot/components/CommandList"
import ControlPanel from "./features/robot/components/ControlPanel"
import Grid from "./features/robot/components/Grid"

import "./style/index.scss"

const rootElement = document.getElementById("root")

if (!!rootElement) {
    const App = (): JSX.Element => {
        return (
            <div className="tw-p-4 tw-gap-4 tw-flex tw-flex-col tw-items-center">
                <Grid />
                <div className="tw-flex tw-gap-2 tw-w-full">
                    <ControlPanel />
                    <CommandList />
                </div>
            </div>
        )
    }

    const root = createRoot(rootElement)
    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    )
}
