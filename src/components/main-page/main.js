import React from 'react'
import './main.scss'

const Main = () => {
  return (
    <section className="main" id="main">
        <div className="left-main">
            <div className="filter">
                <div className="content">
                <h2>THE FATHER OF THE BREAD</h2>
                <h1>Challahdad</h1>
                <button className="order" href="#order">ORDER</button>
                </div>
            </div>
        </div>
        <div className="right"></div>
        <div className="right-main">
                <div className="main-logo">
                    <h1>challahdad</h1>
                </div>
        </div>
    </section>
  )
}

export default Main