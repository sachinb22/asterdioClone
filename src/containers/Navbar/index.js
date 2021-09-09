import React from 'react'
import Logo from '../../assets/images/logo.png'
import './style.scss'
const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt />
            <ul>
                <li>
                    <div>01</div> Home
                </li>
                <li> <div>02</div>Insights </li>
                <li> <div>03</div>Portfolio</li>
                <li> <div>04</div>Career</li>
                <li> <div>05</div>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar