// Login.jsx
import React, { useState, useContext } from 'react';
import AuthService from './AuthService';
import { AuthContext } from './AuthContext';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { setIsLoggedIn } = useContext(AuthContext);

	const handleLogin = () => {
		AuthService.login(username, password);
		if (AuthService.isAuthenticated()) {
			setIsLoggedIn(true);
		}
	};

	return (
		<div>
			<input
				type='text'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
