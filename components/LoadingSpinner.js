// components/LoadingSpinner.js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: ${spin} 1s linear infinite;
	margin: auto;
`;

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function LoadingSpinner() {
	return (
		<SpinnerContainer>
			<Spinner />
		</SpinnerContainer>
	);
}
