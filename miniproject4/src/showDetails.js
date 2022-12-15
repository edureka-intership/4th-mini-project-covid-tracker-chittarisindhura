import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const ShowDetails = ({ data }) => {
  const location = useLocation();
  const user = location.state;

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      {user !== null ? (
        <div class="details">
          <div class="text">
            <h1>{user.names ? user.names : ""}</h1>
            <p>{user.summarys.replace(/<[^>]+>/g, "")}</p>
          </div>
          <div class="section">
            <img
              class="userimage"
              src={user.images}
              alt="image not found"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ShowDetails;
