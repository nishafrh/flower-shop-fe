import { CssBaseline, StyledEngineProvider } from '@mui/material'
import AppRoutes from './routes'

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<AppRoutes />
		</StyledEngineProvider>
	)
}

export default App
