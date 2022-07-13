import React from 'react'
import './menu.scss'

const Menu = () => {
  return (
    <section className="menu-container" id="menu">
        <h1>Menu</h1>
        <ul>
            <li>
                <h2 className="name">saltydad</h2>
                <p className="desc">a classic challah topped with salt</p>
                <h2 className="price">12</h2>
            </li>
            <li>
                <h2 className="name">the funcle</h2>
                <p className="desc">everything bagel seasoning</p>
                <h2 className="price">14</h2>
            </li>
            <li>
                <h2 className="name">za'dad</h2>
                <p className="desc">za'atar with sesame seeds</p>
                <h2 className="price">14</h2>
            </li>
            <li>
                <h2 className="name">shriveldad</h2>
                <p className="desc">cinnamon raisin</p>
                <h2 className="price">16</h2>
            </li>
            <li>
                <h2 className="name">sugardad</h2>
                <p className="desc">chocolate chips and cinnamon</p>
                <h2 className="price">16</h2>
            </li>
            <li>
                <h2 className="name">cheesydad</h2>
                <p className="desc">filled with cheese and fresh herbs</p>
                <h2 className="price">18</h2>
            </li>
            <li>
                <h2 className="name"><span className='thin'>GF</span>ather</h2>
                <p className="desc">chocolate chips and cinnamon</p>
                <h2 className="price">18</h2>
            </li>
        </ul>
    </section>
  )
}

export default Menu