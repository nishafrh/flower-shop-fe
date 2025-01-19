import { Grid, Typography } from '@mui/material'

const ShopSection = () => {
	const shopServices = [
		{
			title: 'Shop',
			children: [
				'All Products',
				'Fresh Flowers',
				'Dried Flowers',
				'Live Plants',
				'Designer Vases',
				'Aroma Candles',
				'Freshener Diffuser'
			]
		},
		{
			title: 'Service',
			children: ['Flower Subcription', 'Wedding & Event Decor']
		}
	]

	return (
		<Grid item xs={3} sx={{ p: '40px', borderRight: '1px solid #121212' }}>
			<Grid container item xs={12} gap={2}>
				{shopServices.map((item, index) => (
					<Grid container item xs={12} gap={2} key={index}>
						<Grid item xs={12}>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: '21px',
									lineHeight: '25.2px',
									color: '#808080'
								}}>
								{item.title}
							</Typography>
						</Grid>
						<Grid container item xs={12} gap={0.2}>
							{item.children.map((subItem, subIndex) => (
								<Grid item xs={12} key={subIndex}>
									<Typography
										sx={{
											fontWeight: 500,
											fontSize: '16px',
											lineHeight: '19.2px',
											color: '#121212'
										}}>
										{subItem}
									</Typography>
								</Grid>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default ShopSection
