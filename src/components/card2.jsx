import React from "react";
import './card2.css';
import Rectangle from '/public/Assets/Rectangle 10.png'


function Card2(){

    return(
        <div className="card2">
            <div className="card-name">
                <h3>John Doe</h3>
                <p>john@doe.com</p>
            </div>
            <div className="card-img">
            <img src={Rectangle} alt="" />
            </div>

        </div>
    )
}
export default Card2;