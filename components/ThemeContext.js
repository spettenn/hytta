// components/ThemeContext.js
'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeToggleContext = createContext();

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function ThemeToggleProvider({ children }) {
	const [mode, setMode] = useState('light');

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#1976d2',
					},
					secondary: {
						main: '#dc004e',
					},
				},
			}),
		[mode]
	);

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeToggleContext.Provider value={toggleTheme}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
}
