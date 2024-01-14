import React from 'react';
import styled from 'styled-components';

const Outer = styled.footer`
	width: 100%;
	height: 100px;
	align-items: center;
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

function Footer() {
	return (
		<Outer>
			<p>Footer</p>
		</Outer>
	);
}

export default Footer;
