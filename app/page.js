'use client';

import { Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';
import WeatherWinter from '../components/weather/WeatherWinter';
import WeatherSummer from '../components/weather/WeatherSummer';
import WeatherLake from '../components/weather/WeatherLake';

const Container = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
`;

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
				<Grid container spacing={3} style={{ marginTop: '20px' }}>
					<Grid item xs={12} sm={4}>
						<WeatherWinter />
					</Grid>
					<Grid item xs={12} sm={4}>
						<WeatherSummer />
					</Grid>
					<Grid item xs={12} sm={4}>
						<WeatherLake />
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
