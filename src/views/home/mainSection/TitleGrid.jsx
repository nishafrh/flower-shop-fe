import { Grid, Typography } from '@mui/material'
import image1 from '../../../assets/mainSection/image-1.svg'

const TitleGrid = () => (
	<Grid
		container
		item
		md={12}
		lg={6}
		gap={3}
		sx={{ borderBottom: '1px solid #121212', p: '80px' }}>
		<Grid item xs={12} sx={{ borderBottom: '1px solid #121212' }}>
			<Typography sx={{ fontWeight: 600, fontSize: '67px', lineHeight: '80.4px' }}>
				Kyiv LuxeBouquets
			</Typography>
			<Typography
				sx={{
					fontSize: '18px',
					fontWeight: 400,
					lineHeight: '25.2px',
					textAlign: 'left'
				}}>
				Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
				Online Flower Delivery Service
			</Typography>
		</Grid>

		<Grid
			container
			item
			xs={12}
			columnSpacing={3}
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'flex-end'
			}}>
			<Grid
				item
				xs={6}
				sx={{
					borderRight: '1px solid #121212',
					display: 'flex'
				}}>
				<img src={image1} title='model1' alt='model1' width={206} height={206} />
			</Grid>
			<Grid item xs={6}>
				<Typography
					sx={{
						fontSize: '18px',
						fontWeight: 400,
						lineHeight: '25.2px'
					}}>
					Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
					Online Flower Delivery Service
				</Typography>
			</Grid>
		</Grid>
	</Grid>
)

export default TitleGrid
