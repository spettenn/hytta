// app/page.js
'use client';

import { Container, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='home-page-wrapper'>
			<Container>
				<Typography variant='h3' gutterBottom>
					Welcome to Cabin Management
				</Typography>
				<Typography variant='h6' gutterBottom>
					Select a Cabin
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<Button
							variant='contained'
							color='primary'
							fullWidth
							component={Link}
							href='/cabin/winter'>
							Hafjell
						</Button>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Button
							variant='contained'
							color='primary'
							fullWidth
							component={Link}
							href='/cabin/summer'>
							Vix
						</Button>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Button
							variant='contained'
							color='primary'
							fullWidth
							component={Link}
							href='/cabin/lake'>
							Børja
						</Button>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
