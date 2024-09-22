import React from "react";
import main_logo from "../Images/logo-main.png"

const Nav = () => {
  return(
    <nav>
      <section className="nav_logo">
        <img src={main_logo} alt="Little Lemon Logo" role="presentation"></img>
      </section>
      <section className="nav_link">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#reservations">Order Online</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav;