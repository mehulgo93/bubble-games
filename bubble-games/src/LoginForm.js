import React, { useState } from 'react';

function LoginForm() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace these with your actual valid credentials for demonstration purposes
        const validUsername = 'angel';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    return (
        <div>
            {!isLoggedIn && (
                <div>
                    {!showLoginForm ? (
                        <button onClick={handleShowLoginForm}>Login</button>
                    ) : (
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <button type="submit"> Login 👤</button>
                        </form>
                    )}

                </div>
            )}
            {isLoggedIn && <p className='login-message'>Angel is logged in.</p>}
        </div>
    );
}

export default LoginForm;
