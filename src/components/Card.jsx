import React from "react";
import img from "../images/location.svg";

function Card(props) {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${props.imageUrl}
          )`,
        }}
      ></div>
      <div className="location-desc">
        <p className="card-title">
          <img src={img} alt="" /> {props.location}{" "}
          <span className="title-map">
            <a href={props.googleMapsUrl}>View On Google Maps</a>
          </span>
        </p>
        <h2>{props.title} </h2>

        <span>
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
