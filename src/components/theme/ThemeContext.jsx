// ThemeContext.js
import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from './Pallet';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light'); // default theme

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const currentTheme = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
