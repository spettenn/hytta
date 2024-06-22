// components/Todo.js
'use client';

import { useState } from 'react';
import {
	Typography,
	TextField,
	Button,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

export default function Todo() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const handleAddTodo = () => {
		setTodos([...todos, newTodo]);
		setNewTodo('');
	};

	return (
		<div>
			<Typography variant='h5' gutterBottom>
				To-Do List
			</Typography>
			<TextField
				label='New To-Do'
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				fullWidth
				margin='normal'
			/>
			<Button variant='contained' color='primary' onClick={handleAddTodo}>
				Add To-Do
			</Button>
			<List>
				{todos.map((todo, index) => (
					<ListItem key={index}>
						<ListItemText primary={todo} />
					</ListItem>
				))}
			</List>
		</div>
	);
}
