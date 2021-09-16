import React from 'react'
import "./Login.css"
import SmallLogo from "../../assets/Small Logo.png"
import Background from "../../assets/background.jpg"
function Login() {
    return (
        <div className="MainContainer">
            <div className="container1">
            <div className="navDiv1">
                <img className="navLogo" src={SmallLogo} alt="" />
                <span className="Navspan1">Dream11 is better</span><br/>
                <span className="Navspan2">on the App!</span>
                <a href="../../assets/dream11.apk" target="_blank" download className="navButton" >Download App</a>
            </div>
            <div className="navDiv2">
                <span>Login</span>
            </div>
            <div>
                <input type="text" />
                <button>Proceed</button>
            </div>
            </div>
           
            <div className="container2">
                <img className="img1" src={Background} alt="" />
            </div>
        </div>
    )
}

export default Login
