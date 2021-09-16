import React from 'react'
import {Route, Switch} from "react-router"
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'


function Routers() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                   <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>


            </Switch>
            
        </div>
    )
}

export default Routers
