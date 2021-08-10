import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label>Full Name</label>
                    <input name="name" placeholder="Enter Full Name..." type="text" />
                    <label>Full Name</label>
                    <input name="name" placeholder="Enter Full Name..." type="text" />
                    <label>Email</label>
                    <input name="email" placeholder="Enter Email..." type="email" />
                    <label>Message</label>
                    <textarea rows="6" placeholder="Enter Message..." name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
