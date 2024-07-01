'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Box } from '@mui/material';
import styled from 'styled-components';

const GlassCard = styled.div`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	width: 100%;
	margin: 0px;
`;

const WeatherIcon = styled.img`
	width: 50px;
	height: 50px;
`;

export default function WeatherLake() {
	const [weather, setWeather] = useState({
		name: 'Børja',
		weather: [{ description: 'Partly cloudy', icon: '03d' }],
		main: { temp: 15, humidity: 70 },
		wind: { speed: 5 },
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch weather data here if needed
	}, []);

	if (loading) {
		return <CircularProgress />;
	}

	if (error) {
		return <Typography color='error'>{error}</Typography>;
	}

	return (
		<GlassCard>
			<Typography variant='h6'>Weather for Lake Cabin</Typography>
			{weather && (
				<>
					<WeatherIcon
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
						alt='Weather Icon'
					/>
					<Typography variant='body1'>
						{weather.name}: {weather.weather[0].description}
					</Typography>
					<Typography variant='body2'>
						Temperature: {weather.main.temp}°C
					</Typography>
					<Typography variant='body2'>
						Humidity: {weather.main.humidity}%
					</Typography>
					<Typography variant='body2'>
						Wind: {weather.wind.speed} m/s
					</Typography>
				</>
			)}
		</GlassCard>
	);
}
