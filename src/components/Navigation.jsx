import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeProvider, ThemeContext } from './theme/ThemeContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import LoginForm from './auth/LoginForm';

const NavItem = styled.div`
	&:hover {
		background-color: #ccc;
	}
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

const LoginButton = styled.button`
	// Style your login button
`;

const Navigation = ({ isLoggedIn }) => {
	const { currentTheme, toggleTheme } = useContext(ThemeContext);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const loginFormRef = useRef(null);

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

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				loginFormRef.current &&
				!loginFormRef.current.contains(event.target)
			) {
				setShowLoginForm(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [loginFormRef]);

	return (
		<ThemeProvider theme={currentTheme}>
			<NavigationBar>
				<Link to='/'>
					<img src={Logo} alt='logo' />
				</Link>

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
							{!isLoggedIn && (
								<>
									<LoginButton onClick={() => setShowLoginForm(!showLoginForm)}>
										Login
									</LoginButton>
									{showLoginForm && <LoginForm />}
								</>
							)}
							{showLoginForm && <LoginForm />}
						</>
					)}
				</Div>
			</NavigationBar>
		</ThemeProvider>
	);
};

export default Navigation;
