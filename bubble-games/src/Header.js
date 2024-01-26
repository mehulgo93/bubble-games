import React, { useState } from 'react';
import myImage from './logoWithBlackBackground.jpeg';
import SearchBar from './SearchBar';
import LoginForm from './LoginForm';




function Header() {
    return (
        <header>
            <div className="header-container">
                <h1 className='logo-name'><img className='Logo' src={myImage} alt="Logo" />Bubble Games</h1>
                <div className="language-button">
                    <LoginForm />
                </div>
                <SearchBar />
            </div>
        </header>
    )
}

export default Header;
