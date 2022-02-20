import React, { lazy, Suspense, useEffect, useState } from 'react'
import Header from "./components/Header";
import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))
const generateClassName = createGenerateClassName({
    productionPrefix: 'ct'
})
const history = createBrowserHistory()
const App = () => {
    const [ isSignedIn, setIsSignIn ] = useState(false)
    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    }, [ isSignedIn ])


    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignIn(false)}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignIn(true)}/>
                            </Route>
                            <Route path='/dashboard'>
                                {!isSignedIn && <Redirect to='/'/>}
                                <DashboardLazy/>
                            </Route>
                            <Route path='/'>
                                <MarketingLazy/>
                            </Route>

                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App