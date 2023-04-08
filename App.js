import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./fireBase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import Layout from "./components/Layout";

const promise = loadStripe(
  "pk_test_51M3gmjSCMhJHacRa1jodLkJ1tH4ppwK48Epzca5ZNI1nVRPHbUjPfAFpSD1bgHMU63Kvepa5XtVpSzTm4q0sy0RZ00d3OeaG6s"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads....
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER IS >>>", authUser);

      if (authUser) {
        //the user is just logged-in / the user was logged-in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged-out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
