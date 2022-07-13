import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h1>Contact US</h1>
        <div className="content">
        <form action="submit" className="contact-form">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label htmlFor="email">email</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="phone">phone</label>
            <br />
            <input type="phone" />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" cols="30" rows="7"></textarea>
            <button className="submit">Send</button>
        </form>
        <div className="social-icons">
            <ul>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Contact