'use client';

import { useParams } from 'next/navigation';
import { Container, Typography, Grid } from '@mui/material';
import Booking from '../../../components/Booking';
import Todo from '../../../components/Todo';
import LoadingSpinner from '../../../components/LoadingSpinner';

const cabins = {
	winter: 'Winter Cabin',
	summer: 'Summer Cabin',
	lake: 'Lake Cabin',
};

export default function CabinDashboard() {
	const params = useParams();
	const { cabin } = params;

	if (!cabin || !cabins[cabin]) {
		return (
			<Container>
				<LoadingSpinner />
			</Container>
		);
	}

	return (
		<Container>
			<Typography variant='h4' gutterBottom>
				{cabins[cabin]} Dashboard
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Booking cabin={cabins[cabin]} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Todo />
				</Grid>
			</Grid>
		</Container>
	);
}
