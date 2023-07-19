import React from 'react';
import myImage from './logoWithBlackBackground.jpeg';

function Header() {
    return (
        <header>
            <div>
                <h1 className='logo-name'><img className='Logo' src={myImage} alt="Logo" />Bubble Games</h1>
            </div>
            <div className="header-container">
                <div className="language-button">
                    <button>Language</button>
                </div>
                <div className="login-button">
                    <button>Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
