import React from "react"
import logo_small from "../Images/logo-small.png"

const Footer = () => {
  return(
    <footer>
      <section>
        <div className="footer_image">
          <img src={logo_small} alt="restaurant logo" />
        </div>
        <div>
          <p>Document Navigation:</p>
          <ul role="navigation list">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <p>Contact:</p>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <p>Social Media Links:</p>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer;