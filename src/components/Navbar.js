import React from 'react';
import { Link } from 'react-router-dom';
import brandlogo from "./assets/blogeek-logo.jpg"

function Navbar(){
    return(
        <div className="Navbar container-fluid">
            <img className="Navbrand" src={brandlogo} alt="brand-logo"></img>
            <ul className="Navitems">
                <li className="Navitem">
                    <a href="/">Posts</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
