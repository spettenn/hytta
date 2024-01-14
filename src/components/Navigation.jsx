// Navigation.js
import React, { useContext } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavItem = styled.div`
	// Add styles for navigation items
`;

const Div = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

const Button = styled.button`
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
`;

const Navigation = ({ isLoggedIn }) => {
	const { currentTheme, toggleTheme } = useContext(ThemeContext);

	const NavigationBar = styled.nav`
		background-color: ${currentTheme.background};
		color: ${currentTheme.text};
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 1rem;

		img {
			height: 4rem;
		}
	`;

	return (
		<NavigationBar>
			<img src={Logo} alt='logo' />
			<Div>
				{isLoggedIn ? (
					<>
						<Button onClick={toggleTheme}>Toggle Theme</Button>
						<NavItem>Logout</NavItem>
						<Link to='/dashboard'>Dashboard</Link>
						<NavItem>News</NavItem>
					</>
				) : (
					<>
						<NavItem onClick={toggleTheme}>Toggle Theme</NavItem>
						<NavItem>Login</NavItem>
					</>
				)}
			</Div>
		</NavigationBar>
	);
};

export default Navigation;
