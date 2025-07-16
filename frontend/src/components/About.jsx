import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>“Where Flavor Becomes Ritual.”</p>
            </div>
            <p className="mid">
              At <strong>SÁNARA</strong>, we believe dining is more than taste —
              it’s transformation. Born from the harmony of ancient roots and
              modern artistry, SÁNARA is a culinary sanctuary where every dish
              is crafted to nourish the body, stir the soul, and awaken memory.
              <br />
              <br />
              Drawing inspiration from global traditions — the healing spices of
              the East, the soulful warmth of the Mediterranean, and the minimal
              elegance of the modern palate — we blend flavor with feeling in a
              way that’s rare, intentional, and unforgettable.
              <br />
              <br />
              This is not just a restaurant. This is a return to something
              sacred. This is <strong>SÁNARA</strong>.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
