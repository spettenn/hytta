'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import {
	Typography,
	TextField,
	Button,
	List,
	ListItem,
	ListItemText,
	Grid,
	MenuItem,
} from '@mui/material';

export default function Booking({ cabin }) {
	const [bookings, setBookings] = useState([]);
	const [newBooking, setNewBooking] = useState({
		name: '',
		cabin: cabin || '',
		dateStart: '',
		dateEnd: '',
		people: 1,
	});

	const handleBooking = () => {
		setBookings([...bookings, newBooking]);
		setNewBooking({
			name: '',
			cabin: cabin || '',
			dateStart: '',
			dateEnd: '',
			people: 1,
		});
	};

	return (
		<div>
			<Typography variant='h5' gutterBottom>
				Manage Bookings
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label='Name'
						value={newBooking.name}
						onChange={(e) =>
							setNewBooking({ ...newBooking, name: e.target.value })
						}
						fullWidth
						margin='normal'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label='Cabin'
						value={newBooking.cabin}
						disabled
						fullWidth
						margin='normal'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label='Start Date'
						type='date'
						value={newBooking.dateStart}
						onChange={(e) =>
							setNewBooking({ ...newBooking, dateStart: e.target.value })
						}
						fullWidth
						margin='normal'
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label='End Date'
						type='date'
						value={newBooking.dateEnd}
						onChange={(e) =>
							setNewBooking({ ...newBooking, dateEnd: e.target.value })
						}
						fullWidth
						margin='normal'
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label='Number of People'
						type='number'
						value={newBooking.people}
						onChange={(e) =>
							setNewBooking({ ...newBooking, people: parseInt(e.target.value) })
						}
						fullWidth
						margin='normal'
						inputProps={{ min: 1 }}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant='contained'
						color='primary'
						onClick={handleBooking}
						fullWidth>
						Add Booking
					</Button>
				</Grid>
			</Grid>
			<List>
				{bookings.map((booking, index) => (
					<ListItem key={index}>
						<ListItemText
							primary={`${booking.name} - ${booking.cabin}`}
							secondary={`From ${format(
								new Date(booking.dateStart),
								'PP'
							)} to ${format(new Date(booking.dateEnd), 'PP')}, ${
								booking.people
							} people`}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);
}
