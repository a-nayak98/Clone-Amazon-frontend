import React from "react";
// import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71z2zEQZ0dL._SX3000_.jpg"
            alt="banner-img"
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="002351"
              title="The lean startup"
              price={29.99}
              image="https://assets.website-files.com/5b9b7195899c182f24cdf0c1/5f6dc74a5e6e6e8dcb9e6ebf_10-libros-emprendedor01.jpg"
              rating={5}
            />
            <Product
              id="406352"
              title="Samsung LC45621RUXWE 32' Curved LED Gaming Monitor"
              price={169.99}
              image="https://i.ebayimg.com/00/s/MTAwMFgxNTAw/z/wFAAAOSwMhxbaFCc/$_57.JPG?set_id=8800005007"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id="600302"
              title="LG 6 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1006ADW, White, Direct Drive Technology, 2 Years Warranty)"
              price={221.99}
              image="https://www.reliancedigital.in/medias/LG-FHM1006ADW-Washing-Machines-491892021-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjkzMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDc1L2gyOS85MzYxMzEzNTk1NDIyLmpwZ3w5ZWNiMTFjM2YxYmRhNWRiYjBjMmZkZjVmNTkzNTU3MzExNWUxMTdlYjJhNDNlMzIyYjI4NDU5ODE5OWUzZjg3"
              rating={3}
            />
            <Product
              id="236548"
              title="
            Luminous Inverter & Battery Combo for Home, Office & Shops (Zelio+ 1100 Pure Sine Wave Inverter, RC 18000ST 150 Ah Tubular Battery)"
              price={51.99}
              image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41bC29ZhfLL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
            <Product
              id="200215"
              title="
            PHILIPS BT1232/15 Skin-friendly Beard Trimmer - DuraPower Technology, Cordless Rechargeable with USB Charging, Charging indicator, Travel lock, No Oil Needed, Blue"
              price={35}
              image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41ii70g37oL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="0000124"
              title="
            OnePlus 9RT 5G (Hacker Black, 12GB RAM, 256GB Storage)+Alexa hands-free capable"
              price={66}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61L8TX2kpRL._SX679_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
