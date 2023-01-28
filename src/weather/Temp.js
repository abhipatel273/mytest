import React, { useEffect, useState } from 'react';

// d5d0fcbd7dbc5da257e354672410ddbf

// http://api.openweathermap.org/geo/1.0/direct?q=Ahmedabad&limit=5&appid=d5d0fcbd7dbc5da257e354672410ddbf

export default function Temprature() {

  const [searchvalue, setSearchValue] = useState("Ahmedabad");

  const getWetherInfo = async() =>{
   try{
    // let url ="api.openweathermap.org/data/2.5/weather?q=Ahmedabad&apiid=d5d0fcbd7dbc5da257e354672410ddbf"

   }catch(error){
    console.log(error);
   }
  }

  useEffect(()=>{
    getWetherInfo();
  })

  return (
    <>
      <div>
        <div className="container weather-container px-0">
          <div className="weather-application">
            <div className="search-box-div">
              <div className="row">
                <div className="col-10 px-0">
                  <input type="text" placeholder="search-text" className="searchbox-input"
                   value={searchvalue} onClick={(e) => setSearchValue(e.target.value)}></input>
                </div>
                <div className="col-2 px-0">
                  <button className='btn btn-info' onClick={getWetherInfo}>search</button>
                </div>
              </div>
            </div>
            <div className='updated-information my-4'>
              <div className="sunset-div py-2">
                <div className="row text-center">
                  <div className="col-12 px-0">
                    <i className="sun-icon fas fa-sun display-1"></i>
                  </div>
                </div>
              </div>
              <div className="weather-information">
                <div className="row">
                  <div className="col-4 bg-dark px-0 py-3">
                    <h2 className="celsians-text">25.5</h2>
                  </div>
                  <div className="col-4 bg-dark px-0 py-3">
                    <h2 className="celsians-text">SUNNY</h2>
                    <p className="text-white text-center">Ahmedabad,India</p>
                  </div>
                  <div className="col-4 px-0 py-3 bg-dark">
                    <p className="text-white text-center text-bold">{new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="weather-all-information py-3">
                <div className="row justify-content-center">
                  <div className="col-3 d-flex align-items-center">
                    <i class="icon fas fa-sun"></i>
                    <div className="unname-div d-flex align-items-center flex-column">
                      <p className="converter-text my-0">19:19 PM</p>
                      <p className="converter-text">Sunset</p>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <i className="icon fas fa-humidity"></i>
                    <div className="unname-div d-flex align-items-center flex-column">
                      <p className="converter-text my-0">19:19 PM</p>
                      <p className="converter-text">Humidity</p>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <i className="icon fas fa-cloud-showers-heavy"></i>
                    <div className="unname-div d-flex align-items-center flex-column">
                      <p className="converter-text my-0">19:19 PM</p>
                      <p className="converter-text">Pressure</p>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <i className="icon fas fa-wind"></i>
                    <div className="unname-div d-flex align-items-center flex-column">
                      <p className="converter-text my-0">19:19 PM</p>
                      <p className="converter-text">Speed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
