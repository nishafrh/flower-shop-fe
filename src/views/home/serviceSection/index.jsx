import { Grid, Typography } from '@mui/material'

import FlowerSubscriptionsService from './flowerSubsService'
import DecorService from './decorService'

const ServiceSection = () => (
	<>
		<Grid item xs={12} sx={{ border: '1px solid #121212', borderTop: 'none', p: '80px' }}>
			<Typography
				sx={{ fontWeight: 600, fontSize: '50px', lineHeight: '60px', textAlign: 'center' }}>
				Our Service
			</Typography>
		</Grid>

		<FlowerSubscriptionsService />
		<DecorService />
	</>
)

export default ServiceSection
