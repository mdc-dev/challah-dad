import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
        <div className="logo">LOGO</div>
        <div className="nav-items">
            <ul className="items">
                <li className="item"><a href="#menu">Menu</a></li>
                <li className="item"><a href="#about">Socials</a></li>
                <li className="item"><a href="#order">Order</a></li>
                <li className="item"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav