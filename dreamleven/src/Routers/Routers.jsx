import React from 'react'
import {Route, Switch} from "react-router"
import Home from '../Components/Home'

function Routers() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>


            </Switch>
            
        </div>
    )
}

export default Routers
