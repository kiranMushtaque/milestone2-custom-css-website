import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container">
      <Image
        src="/ccccccccccccccc.jpg"
        alt="cofee"
        width={1250}
        height={500}
        className="aboutpic"
      />
      <h1 className="coffeAbout">About Us</h1>
      <p className="text">
        Welcome to Kiran Coffee Shop, where we promise to <br></br>brighten your
        day with every cup! Our shops name Kiran  symbolizes<br></br> the
        hope and joy we aim to bring to your daily routine, just like <br></br>
        the first light of dawn. At Kiran Coffee Shop, you’ll find freshly
        <br></br> brewed coffee made from the finest quality beans. Our skilled{" "}
        <br></br>baristas pour their love and dedication into every cup,
        ensuring that<br></br> each sip is a unique experience.
      </p>
      <div className="storySection">
        <h2 className="coffeStory">Our Story:</h2>
        <p className="text">
          Kiran Coffee Shop started as a small dream to transform our passion
          for coffee into a business. <br></br>We want you to enjoy not just a
          drink but an experience that lingers in your memory. Come visit
          <br></br> us at Kiran Coffee Shop and start your day with a new ray of
          light!
        </p>
      </div>
    </div>
  );
};

export default Page;
