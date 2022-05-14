import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
function Weather() {
    const apiKey = "7baf326eb291c2e30faf7873305e31b4";
    const unit = "metric";
    const [city, setCity] = useState("");
    const [info, setInfo] = useState({});
    function handleChange(event) {
        let { value } = event.target;
        setCity(value);

    }
    function weatherSearch() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`)
            .then(response => {
                console.log(response)
                setInfo(response.data)

            })
            .catch(error => { console.log(error) })
        setCity("")
    };


    return (
        <div className="container">
            <input
                className="inputs"
                type="text"
                placeholder="ENTER CITY... "
                value={city}
                onChange={handleChange}
            />

            <button
                className="btn"
                onClick={weatherSearch}>
                <BsSearch />
            </button>



            {

                !info.name ?
                    (<div><p>ENTER A VALID CITY AND PRESS THE SEARCH BUTTON</p></div>)
                    :
                    (<div className="tempInfo" >
                        <p>CITY:{info?.name}</p>
                        <p>TEMP:{info?.main.temp}℃</p>
                        <p>FEELS LIKE:{info?.main.feels_like}℃</p>
                        <p>MIN TEMP:{info?.main.temp_min}℃</p>
                        <p>MAX TEMP:{info?.main.temp_max}℃</p>


                    </div>
                    )


            }





        </div >
    )

}

export default Weather;