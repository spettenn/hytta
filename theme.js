// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#dad3be', // Set the default background color
		},
		primary: {
			main: '#4caf50', // Customize your primary color if needed
		},
		secondary: {
			main: '#ff5722', // Customize your secondary color if needed
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 'bold',
					textTransform: 'none',
				},
			},
		},
	},
});

export default theme;
