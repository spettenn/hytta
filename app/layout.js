// app/layout.js
import * as React from 'react';
import ThemeToggleProvider from '../components/ThemeContext';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
	title: 'Cabin Management',
	description: 'Manage your family cabins',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body>
				<ThemeToggleProvider>
					<Navbar />
					{children}
				</ThemeToggleProvider>
			</body>
		</html>
	);
}
