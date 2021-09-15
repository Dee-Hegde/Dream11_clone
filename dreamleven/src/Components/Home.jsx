import React from 'react'
import home1 from "../assets/homelogo.png"
import home2 from "../assets/home2.png"
import home3 from "../assets/home3.png"
import home4 from "../assets/home4.png"

function Home() {
    return (
        <div>
            <div>
            <img src={home1} alt="" />
            <button>Login</button>
            </div>
            <img src={home2} alt="" />
            <img src={home3} alt="" />
            <img src={home4} alt="" />
        </div>
    )
}

export default Home
