import { Grid } from '@mui/material'
import MainSection from './mainSection'
import AboutUsSection from './aboutUs'

function HomePage() {
	return (
		<Grid container>
			<MainSection />
			<AboutUsSection />
		</Grid>
	)
}

export default HomePage
