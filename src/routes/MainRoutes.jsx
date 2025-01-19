import { lazy } from 'react'

import Loadable from '../ui-component/loader/Loadable'
import MainLayout from '../layout/MainLayout'

const HomePage = Loadable(lazy(() => import('../views/home')))

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <HomePage />
		},
		{
			path: '/home',
			element: <HomePage />
		}
	]
}

export default MainRoutes
