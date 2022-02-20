import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from "./App";


const mount = (devRoot, { onNavigate, defaultHistory,initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [ initialPath ]
    });

    if (onNavigate) {
        history.listen(onNavigate)
    }
    ReactDom.render(
        <App history={history}/>,
        devRoot
    )
    return ({
        onParentNavigate: ({ pathname: nextPathName }) => {
            const { pathname } = history.location
            if (pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    })
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}
export {
    mount
}