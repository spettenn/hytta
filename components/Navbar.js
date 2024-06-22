// components/Navbar.js
'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useThemeToggle } from './ThemeContext';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
	const toggleTheme = useThemeToggle();
	const theme = useTheme();

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography
					variant='h6'
					component={Link}
					href='/'
					style={{ flexGrow: 1 }}>
					Cabin Management
				</Typography>
				<Button color='inherit' component={Link} href='/cabin/winter'>
					Hafjell
				</Button>
				<Button color='inherit' component={Link} href='/cabin/summer'>
					Vix
				</Button>
				<Button color='inherit' component={Link} href='/cabin/lake'>
					Børja
				</Button>
				<IconButton color='inherit' onClick={toggleTheme}>
					{theme.palette.mode === 'dark' ? 'light' : 'dark'}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
