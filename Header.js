import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./fireBase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentation = () => {
    if (user) {
      auth.signOut();
    }
  };

  // console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png"
          alt="logo"
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_srch_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentation} className="header_option">
            <span className="header_option_one">
              Hellow {!user ? "Guest" : user.email}
            </span>
            <span className="header_option_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_one">Return</span>
          <span className="header_option_two">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_one">Your</span>
          <span className="header_option_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_option_two header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
