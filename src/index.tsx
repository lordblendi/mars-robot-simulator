import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"

import { store } from "./store"

import Counter from "./components/counter/components/Counter"

import "./style/index.scss"

const rootElement = document.getElementById("root")

if (!!rootElement) {
    const App = (): JSX.Element => {
        return (
            <div>
                <h1 className="tw-bg-yellow-200">Hello!!</h1>
                <h2>Welcome to your First React App..!</h2>
                <Counter />
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
