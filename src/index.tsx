import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"

import { store } from "./store"

import CommandList from "./features/robot/components/CommandList"
import Grid from "./features/robot/components/Grid"

import "./style/index.scss"

const rootElement = document.getElementById("root")

if (!!rootElement) {
    const App = (): JSX.Element => {
        return (
            <div className="tw-p-4 tw-flex tw-gap-4">
                <Grid />
                <CommandList />
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
