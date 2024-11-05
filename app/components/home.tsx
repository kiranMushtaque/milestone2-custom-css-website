import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <Image
          src="/banner cofee.webp"
          alt="banner"
          width={1420}
          height={500}
        />
        <h1>Aroma in Every Sip, Joy in Every Sip!</h1>
      </div>
      {/* 1 image  */}
      <section className="image-gallery">
        <div className="image-box">
          <Image
            src="/1.png"
            alt="Latte"
            className="gallery-image"
            width={300}
            height={200}
          />
          <p className="image-caption">Latte coffee</p>
          <button className="buttons">Order</button>
        </div>

        {/* <!-- 2nd image --> */}

        <div className="image-box">
          <Image
            src="/2.png"
            alt="Latte"
            className="gallery-image"
            width={300}
            height={200}
          />
          <p className="image-caption">Mocha Coffee</p>
          <button className="buttons">Order</button>
        </div>

        {/* <!-- 3 image --> */}

        <div className="image-box">
          <Image
            src="/3.png"
            alt="Latte"
            className="gallery-image"
            width={300}
            height={200}
          />
          <p className="image-caption">Coffee</p>
          <button className="buttons">Order</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
