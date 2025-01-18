import { useSelector } from 'react-redux'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { Routes } from 'react-router-dom'

const App = () => {
	const customization = useSelector(state => state.customization)

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themes(customization)}>
				<CssBaseline />
				<Locales>
					<NavigationScroll>
						<>
							<Routes />
							<Snackbar />
						</>
					</NavigationScroll>
				</Locales>
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default App
