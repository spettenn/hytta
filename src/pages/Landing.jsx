import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext, ThemeProvider } from '../components/theme/ThemeContext';

const Outer = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
`;

function Landing() {
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme}>
			<Outer>hello world</Outer>
		</ThemeProvider>
	);
}

export default Landing;
