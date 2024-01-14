// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeContext.jsx';
import Navigation from './components/Navigation.jsx';
import Landing from './pages/Landing.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real authentication logic

	return (
		<ThemeProvider>
			<Router>
				<Navigation isLoggedIn={isLoggedIn} />
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
