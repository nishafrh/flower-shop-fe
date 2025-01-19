import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import AppRoutes from './routes'

const theme = createTheme()

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default App
