import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/app.css";
const ShowCard = ({ id, image, name, summary }) => {
  var props = { ids: id, images: image, names: name, summarys: summary };

  return (
    <div>
      <div className="imgDiv">
        <div className="image">
          <Link to={`/show/${id}`} state={props}>
            <img src={image} alt="show" width="218.667px" height="300px" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShowCard;
