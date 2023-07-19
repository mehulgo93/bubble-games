import React from 'react';
import SearchBar from './SearchBar';


function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-container">
                <button className="nav-bar-button">Home</button>
                <button className="nav-bar-button"> Featured Games</button>
                <button className="nav-bar-button">Contact Us</button>
            </div>
        </div>
    )

}

export default NavBar;