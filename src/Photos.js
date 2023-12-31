import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <section className="Photos">
        <div className="wrapper">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a
                  href={photo.src.landscape}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.photographer}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
