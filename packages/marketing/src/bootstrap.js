import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, } from 'history'
import App from "./App";
const history = createMemoryHistory()
const mount = (devRoot, { onNavigate }) => {

    if (onNavigate) {
        history.listen(onNavigate)
    }
    ReactDom.render(
        <App history={history}/>,
        devRoot
    )
    return {
        onParentNavigate({ pathname: nextPathName }) {

            const { pathname } = history.location
            if (pathname !== nextPathName) {
                console.log(history)
                debugger
                location.push(nextPathName)
            }
        }
    }
}
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot, {})
    }
}
export {
    mount
}