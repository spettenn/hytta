import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled, { ThemeContext } from 'styled-components';

// Styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: fit-content;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
`;

const FormContainer = styled.div`
	background: ${(props) => props.theme.background};
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	transform: rotateY(${(props) => (props.flipped ? '180deg' : '0')});
	transition: transform 0.8s;
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledField = styled(Field)`
	padding: 10px;
	border: 1px solid ${(props) => props.theme.text};
	border-radius: 4px;
	color: ${(props) => props.theme.text};
	background: ${(props) => props.theme.background};
`;

const StyledButton = styled.button`
	padding: 10px 15px;
	border: none;
	border-radius: 4px;
	background-color: green;
	color: white;
	cursor: pointer;
`;

const ErrorText = styled.div`
	color: #ff6b6b;
	font-size: 0.8rem;
`;

const ToggleButton = styled.button`
	margin-top: 15px;
	background: none;
	border: none;
	color: ${(props) => props.theme.primary};
	cursor: pointer;
`;
const FlipContainer = styled.div`
	perspective: 1000px;
`;

const Flipper = styled.div`
	transform-style: preserve-3d;
	transition: 0.6s;
	transform: rotateY(${(props) => (props.flipped ? '180deg' : '0')});
`;

const FrontSide = styled(FormContainer)`
	backface-visibility: hidden;
`;

const BackSide = styled(FormContainer)`
	backface-visibility: hidden;
	transform: rotateY(180deg);
`;
const DropdownContainer = styled.div`
	position: absolute;
	top: 50px; // Adjust as needed to position below the Login button
	right: 20px; // Adjust as needed for alignment
	z-index: 10;
	background-color: ${(props) => props.theme.background};
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	padding: 20px;
	width: 300px; // Set a fixed width or make it responsive
`;

// Validation schemas
const LoginSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

const SignupSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Required'),
});

const LoginForm = () => {
	const [isSignup, setIsSignup] = useState(false);
	const themeContext = useContext(ThemeContext);

	return (
		<DropdownContainer theme={themeContext}>
			<Container>
				<FlipContainer>
					<Flipper flipped={isSignup}>
						<FrontSide theme={themeContext}>
							<Formik
								initialValues={{
									username: '',
									password: '',
								}}
								validationSchema={LoginSchema}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2));
										setSubmitting(false);
									}, 400);
								}}>
								{({ isSubmitting }) => (
									<StyledForm>
										<StyledField type='text' name='username' />
										<ErrorMessage name='username' component={ErrorText} />
										<StyledField type='password' name='password' />
										<ErrorMessage name='password' component={ErrorText} />
										<StyledButton type='submit' disabled={isSubmitting}>
											Submit
										</StyledButton>
									</StyledForm>
								)}
							</Formik>
						</FrontSide>
						<BackSide theme={themeContext}>
							<Formik
								initialValues={{
									username: '',
									email: '',
									password: '',
									confirmPassword: '',
								}}
								validationSchema={SignupSchema}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2));
										setSubmitting(false);
									}, 400);
								}}>
								{({ isSubmitting }) => (
									<StyledForm>
										<StyledField type='text' name='username' />
										<ErrorMessage name='username' component={ErrorText} />
										<StyledField type='email' name='email' />
										<ErrorMessage name='email' component={ErrorText} />
										<StyledField type='password' name='password' />
										<ErrorMessage name='password' component={ErrorText} />
										<StyledField type='password' name='confirmPassword' />
										<ErrorMessage
											name='confirmPassword'
											component={ErrorText}
										/>
										<StyledButton type='submit' disabled={isSubmitting}>
											Submit
										</StyledButton>
									</StyledForm>
								)}
							</Formik>
						</BackSide>
					</Flipper>
				</FlipContainer>
				<ToggleButton
					theme={themeContext}
					onClick={() => setIsSignup(!isSignup)}>
					{isSignup
						? 'Already have an account? Log In'
						: "Don't have an account? Sign Up"}
				</ToggleButton>
			</Container>
		</DropdownContainer>
	);
};

export default LoginForm;
