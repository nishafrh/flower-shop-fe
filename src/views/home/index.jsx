import { Grid } from '@mui/material'

import MainSection from './mainSection'
import AboutUsSection from './aboutUs'
import WhyChooseUsSection from './whyChooseUs'
import ContactUsSection from './contacUs'
import ServiceSection from './serviceSection'
import ReviewSection from './reviewSection'
import FooterSection from './footer'

function HomePage() {
	return (
		<Grid container>
			<MainSection />
			<AboutUsSection />
			<WhyChooseUsSection />
			<ContactUsSection />
			<ServiceSection />
			<ReviewSection />
			<FooterSection />
		</Grid>
	)
}

export default HomePage
