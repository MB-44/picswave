import React, {useEffect, useState} from "react";
import "./header-style-01.css";

function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <nav className="header-nav">
                    <h1 className="header-title">picswave</h1>

                <div className="header-search-menu">
                    <ul>
                        <li><button><a href="#">Session</a></button></li>
                        <li><button><a href="#">Destination</a></button></li>
                        <li><button><a href="#">Occasion</a></button></li>
                        <li><button><a href="#">Become a photographer</a></button></li>
                    </ul>
                </div>

                <div className="toggle-menu">
                    
                </div>


                </nav>
            </div>
        </div>
    );
}

export default Header;