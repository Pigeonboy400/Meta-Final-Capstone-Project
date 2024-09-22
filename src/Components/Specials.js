import React from "react";
import bruschetta from "../Images/bruschetta.jpg"
import saladgreek from "../Images/salad-greek.jpg"
import lemondessert from "../Images/lemon dessert.jpg"

const Specials = () => {
  return (
    <>
      <div className="main__header">
        <h1>This Week's Specials!</h1>
        <p>
          <button>Order Online</button>
        </p>
      </div>
      <div className="container">
        <div className="card">
          <img
            src={saladgreek}
            alt="greek salad"
          />
          <section className="product">
            <h2>Greek Salad</h2>
            <p className="price">$12.99</p>
          </section>
          <p className="special_desc">
            The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with
            crunchy garlic.
          </p>
          <section>
            <button className="order_button">Order Online</button>
          </section>
        </div>
        <div className="card">
          <img
            src={bruschetta}
            alt="bruschetta"
          />
          <section className="product">
            <h2>Bruschetta</h2>
            <p className="price">$5.99</p>
          </section>
          <p className="special_desc">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olice
            oil.
          </p>
          <section>
            <button className="order_button">Order Online</button>
          </section>
        </div>
        <div className="card">
          <img
            src={lemondessert}
            alt="lemon dessert"
          />
          <section className="product">
            <h2>Lemon Dessert</h2>
            <p className="price">$5.00</p>
          </section>
          <p className="special_desc">
            This comes straight from grandma's recipie book, every last ingredient has been sourced and is as authentic
            as can be imagined.
          </p>
          <section>
            <button className="order_button">Order Online</button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Specials;
