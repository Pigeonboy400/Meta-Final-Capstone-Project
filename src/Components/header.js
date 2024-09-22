import React from "react";
import Header_Image from "../Images/header-img.jpg"

const Header = ({onReserveButtonClick}) => {
  return(
    <>
      <header>
        <section>
          <div>
            <h2 aria-level="1">Little Lemon</h2>
            <h3 aria-level="2">Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <button aria-label="button" onClick={onReserveButtonClick} className="reserve_table">Reserve a Table</button>
          </div>
          <div>
            <img src={Header_Image} alt="serving bruschetta" />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;