import React from "react";
import card_img from '/public/Assets/media.png'
import './card.css'
import Face from '/public/Assets/facebook.png'
import Insta from '/public/Assets/instagram.png'
import Twi from '/public/Assets/twitter.png'



function Card(){
    return(
        <div className="card">
            <div className="card-img">
                <img src={card_img} alt="" />
            </div>
            <div className="card-text">
                <h2>John Doe</h2>
                <p>CEO</p>
            </div>
            <div className="icons">
            <ul>
  <span className="margin"><img src={Face} alt="" /></span>
  <span  className="margin"><img src={Insta} alt="" /></span>
  <span  className="margin"><img src={Twi} alt="" /></span>
 
</ul>
            </div>

        </div>
    )
}
export default Card