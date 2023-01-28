import React from "react";

export default function Card({ menu }) {
    return (
        <>
            <div className="main-div">
                <div className="row justify-content-between">
                    {menu.map((curelem,index) => {
                        const { id, name, description, images, category } = curelem;
                        return (
                            <>
                                < div className="col-lg-3 col-md-3 col-12 card-column mx-3 mb-5" key={index} >
                                    <div className="card-container">
                                        <div className="card">
                                            <div className="card-body">
                                                <span className="card-number card-circle">{id}</span>
                                                <p className="card-subtitle">{name}</p>
                                                <h5 className="card-title">{category}</h5>
                                                <p className="card-descripton">{description}</p>
                                                <img src={images} className="card-img" alt="breakfast" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    );
}
