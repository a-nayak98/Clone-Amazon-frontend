import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);

  return (
    <div>
      <div className="checkOut">
        <div className="checkOut__left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/IMG20/Home/2022/BAU/Homemain/Smart_Home_PC.jpg"
            alt="add"
            className="checkOut__add"
          />
          <div>
            <h3>Hello,{user?.email} </h3>
            <h2 className="checkOut__titel">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkOut__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
