import { Box, Button, Grid, Stack, Typography } from '@mui/material'

import googleLogo from '../../../assets/google-logo.png'
import ReviewSlider from './ReviewSlider'

const ReviewSection = () => (
	<Grid
		container
		item
		xs={12}
		gap={7}
		sx={{ border: '1px solid #121212', borderTop: 'none', p: '80px' }}>
		<Grid item xs={12}>
			<Stack
				direction='column'
				spacing={2}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center'
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
					<img src={googleLogo} title='google-logo' alt='google-logo' />
					<Typography sx={{ fontWeight: 500, fontSize: '14px', lineHeight: '16.8px' }}>
						REVIEWS
					</Typography>
				</Box>
				<Typography sx={{ fontWeight: 600, fontSize: '50px', lineHeight: '60px' }}>
					Our Clients Say
				</Typography>
				<ReviewSlider />
			</Stack>
		</Grid>
		<Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Button
				variant='outlined'
				sx={{
					borderRadius: 0,
					border: '1px solid #121212',
					color: '#121212',
					paddingX: '24px',
					paddingTop: '16px',
					paddingBottom: '14px'
				}}>
				READ REVIEWS
			</Button>
		</Grid>
	</Grid>
)

export default ReviewSection
