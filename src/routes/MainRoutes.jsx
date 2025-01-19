import { lazy } from 'react'
import Loadable from '../ui-component/loader/Loadable'

const HomePage = Loadable(lazy(() => import('../views/home')))

const MainRoutes = {
	path: '/home',
	element: <HomePage />
}

export default MainRoutes
