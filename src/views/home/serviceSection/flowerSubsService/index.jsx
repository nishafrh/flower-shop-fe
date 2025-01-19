import { Grid, Stack, Typography } from '@mui/material'

import flowerSubscription from '../../../../assets/serviceSection/flower-subs.png'
import Button1 from '../../../../ui-component/button/Button1'

const FlowerSubscriptionsService = () => (
	<Grid container item xs={12} sx={{ border: '1px solid #121212', borderTop: 'none' }}>
		<Grid item xs={6} sx={{ borderRight: '1px solid #121212' }}>
			<img
				src={flowerSubscription}
				title='flower-subscriptions'
				alt='flower-subscriptions'
				style={{ width: '100%', height: '100%' }}
			/>
		</Grid>
		<Grid container item xs={6} sx={{ p: '80px', alignItems: 'center' }}>
			<Grid item xs={12}>
				<Stack direction='column' spacing={3}>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: '16.8px',
							color: '#121212',
							textAlign: 'center'
						}}>
						SERVICE
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '50px',
							lineHeight: '60px',
							color: '#121212',
							textAlign: 'center',
							whiteSpace: 'nowrap'
						}}>
						Flower Subcriptions
					</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25.2px',
							color: '#121212',
							textAlign: 'center'
						}}>
						Experience the convenience and savings of regular flower deliveries with our
						flexible subscription service - up to 30% more profitable than one-time purchases.
					</Typography>
				</Stack>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Button1 label='SUBSCRIBE NOW' />
			</Grid>
		</Grid>
	</Grid>
)

export default FlowerSubscriptionsService
