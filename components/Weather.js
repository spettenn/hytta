// components/Weather.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Box } from '@mui/material';

const weatherLocations = {
	winter: { lat: 60.472, lon: 8.4689 }, // Example coordinates for Winter Cabin
	summer: { lat: 58.969, lon: 5.733 }, // Example coordinates for Summer Cabin
	lake: { lat: 59.9139, lon: 10.7522 }, // Example coordinates for Lake Cabin
};

export default function Weather({ cabin }) {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			setLoading(true);
			setError(null);
			try {
				const location = weatherLocations[cabin];
				if (location) {
					const response = await axios.get(
						`https://api.openweathermap.org/data/2.5/weather`,
						{
							params: {
								lat: location.lat,
								lon: location.lon,
								appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
								units: 'metric', // Use 'imperial' for Fahrenheit
							},
						}
					);
					setWeather(response.data);
				} else {
					setError('Invalid location');
				}
			} catch (err) {
				setError('Error fetching weather data');
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, [cabin]);

	if (loading) {
		return <CircularProgress />;
	}

	if (error) {
		return <Typography color='error'>{error}</Typography>;
	}

	return (
		<Box>
			<Typography variant='h6'>Weather for {cabin} Cabin</Typography>
			{weather && (
				<>
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
		</Box>
	);
}
