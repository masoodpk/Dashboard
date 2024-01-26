

import React from 'react'
import "./Navbar.css"
import Rectangle from '/public/Assets/Rectangle 10.png'
function NavBar() {
    return (
        <div className='navbar'>
                   <div className="card">
            <div className="card-name">
                <h3>John Doe</h3>
                <p>john@doe.com</p>
            </div>
            <div className="card-img">
            <img src={Rectangle} alt="" />
            </div>

        </div>
           
        </div>
    )
}

export default NavBar