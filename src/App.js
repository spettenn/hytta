import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeContext.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import { AuthProvider } from './components/auth/AuthContext.js';

// pages
import Landing from './pages/Landing.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real authentication logic

	let theme = 'light';

	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Router>
					<Navigation isLoggedIn={isLoggedIn} />
					<Routes>
						<Route path='/' element={<Landing theme={theme} />} />
						<Route path='/dashboard' element={<Dashboard theme={theme} />} />
					</Routes>
					<Footer theme={theme} />
				</Router>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default App;
