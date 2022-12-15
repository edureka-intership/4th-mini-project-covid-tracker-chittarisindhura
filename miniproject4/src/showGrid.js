import React, { useState } from "react";
import ShowCard from "./showCard.js";
const ShowGrid = ({ data }) => {
  let moveToggle = false;
  const [move, setMove] = useState(moveToggle);
  function scrolll() {
    var left = document.querySelector(".imgDivs");
    left.scrollBy(1408, 0);
    setMove(!moveToggle);
  }
  function scrollr() {
    var right = document.querySelector(".imgDivs");
    right.scrollBy(-1408, 0);
  }
  return (
    <div className="main-scroll-div">
      <div>
        <button className="icon" onClick={scrolll}>
          <i className="fas fa-angle-double-left"></i>
        </button>
      </div>
      <div className="imageDiv">
        <div className="cover">
          <div className="imgDivs">
            {data.map((show) => {
              return show.show ? (
                <ShowCard
                  key={show.show.id}
                  id={show.show.id}
                  name={show.show.name}
                  image={
                    show.show.image ? show.show.image.medium : "Img_Not_Found"
                  }
                  summary={show.show.summary}
                />
              ) : (
                <ShowCard
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  image={show.image ? show.image.medium : "Img_Not_Found"}
                  summary={show.summary}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button className="icon" onClick={scrollr}>
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  );
};
export default ShowGrid;
