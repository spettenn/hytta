// components/ClientLayout.js
'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			{children}
		</ThemeProvider>
	);
}
