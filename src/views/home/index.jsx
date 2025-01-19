import { Grid } from '@mui/material'
import MainSection from './mainSection'
import AboutUsSection from './aboutUs'
import WhyChooseUsSection from './whyChooseUs'
import ContactUsSection from './contacUs'

function HomePage() {
	return (
		<Grid container>
			<MainSection />
			<AboutUsSection />
			<WhyChooseUsSection />
			<ContactUsSection />
		</Grid>
	)
}

export default HomePage
