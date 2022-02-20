import React from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import AuthApp from "./components/AuthApp";


const generateClassName = createGenerateClassName({
    productionPrefix: 'ct'
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/auth' component={AuthApp}/>
                        <Route path='/' component={MarketingApp}/>
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App