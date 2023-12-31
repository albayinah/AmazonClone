import React from "react";
import "../checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
        </Link>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <FlipMove
              enterAnimation={{
                from: ticketNotVisibleState,
                to: {},
              }}
              leaveAnimation={{
                from: {},
                to: ticketNotVisibleState,
              }}
            >
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </FlipMove>
          ))}

          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
