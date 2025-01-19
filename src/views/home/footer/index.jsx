import { Grid } from '@mui/material'

import SubEmailSection from './SubEmailSection'
import ContactUsSection from './ContacUsSection'
import ShopSection from './ShopSection'
import AboutUsSection from './AboutUsSection'

const FooterSection = () => (
	<Grid container item xs={12} sx={{ border: '1px solid #121212', borderTop: 'none' }}>
		<SubEmailSection />
		<ContactUsSection />
		<ShopSection />
		<AboutUsSection />
	</Grid>
)

export default FooterSection
