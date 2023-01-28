// import React from "react";
// import image from "./image/breakfast.jpg";
export default function MenuData({ menudatacard }) {
  return (
    <>
      <div className="main-div">
        <div className="row justify-content-between">
          {menudatacard.map((curelem) => {
            const { id, name, category, description, images } = curelem;
            return (
              <>
                <div
                  className="col-lg-3 col-md-3 col-12 card-column mx-3 mb-5"
                  key={id}
                >
                  <div className="card-container">
                    <div className="card">
                      <div className="card-body">
                        <span className="card-number card-circle">{id}</span>
                        <p className="card-subtitle">{category}</p>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-descripton">{description}</p>
                        <img
                          src={images}
                          className="card-img"
                          alt="breakfast"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
