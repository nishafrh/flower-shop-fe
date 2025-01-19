import { AppBar, Box, CssBaseline, styled, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Header from './Header'

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(() => ({
	marginTop: '83px',
	height: 'calc(100vh - 83px)'
}))

const MainLayout = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar enableColorOnDark position='fixed' color='inherit' elevation={0}>
				<Header />
			</AppBar>

			<Main>
				<Outlet />
			</Main>
		</Box>
	)
}

export default MainLayout
