import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Our most beloved creations blend bold spices, slow-crafted
              techniques, and modern presentation — celebrating flavor, texture,
              and the soul of every ingredient.
            </p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
