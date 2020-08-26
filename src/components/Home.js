import React from "react";

import { Product } from "./Product";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon banner"
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="Strategic Innovation Management"
          price={41.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41rreHnGW-L._SX404_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="Apple Ipad Air (10.5-Inch, Wi-Fi, 64GB) - Space Grey"
          price={452}
          rating={5}
          image="https://m.media-amazon.com/images/I/61z85f1XsgL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Innovation Management and New Product Development"
          price={47.46}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41Hq+oi0jxL._SX380_BO1,204,203,200_.jpg"
        />
        <Product
          id="4"
          title="HP 24w Full HD Monitor (1920 x 1080) 23.8 Inch (1 HDMI, 1 VGA) - Black"
          price={99.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61VyLIcjhsL._AC._SR360,460.jpg"
        />
        <Product
          id="5"
          title="WD 1 TB Elements Portable External Hard Drive - USB 3.0"
          price={39.03}
          rating={5}
          image="https://m.media-amazon.com/images/I/71I+BQbC+kL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="ELEPHAS Projector, GC333 Portable Projector"
          price={69.99}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51TXZPD7bOL._AC_SX184_.jpg"
        />
      </div>
    </div>
  );
};
