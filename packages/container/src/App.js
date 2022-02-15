import React from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, Router } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ct'
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header/>
                <MarketingApp/>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App