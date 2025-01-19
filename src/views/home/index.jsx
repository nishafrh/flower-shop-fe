import { Grid } from '@mui/material'
import MainSection from './mainSection'
import AboutUsSection from './aboutUs'
import WhyChooseUsSection from './whyChooseUs'

function HomePage() {
	return (
		<Grid container>
			<MainSection />
			<AboutUsSection />
			<WhyChooseUsSection />
		</Grid>
	)
}

export default HomePage
