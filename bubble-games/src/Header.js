import React from 'react';
import myImage from './logoWithBlackBackground.jpeg';


function Header() {
    return (
        <header>
            <div className="header-container">
                <h1 className='logo-name'><img className='Logo' src={myImage} alt="Logo" />Bubble Games</h1>
                <div className="language-button">
                    <button className="language-button">Language</button>
                </div>
                <div className="login-button">
                    <button className="language-button">Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
