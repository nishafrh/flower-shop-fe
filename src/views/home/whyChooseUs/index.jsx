import { Grid, Stack, Typography } from '@mui/material'

const WhyChooseUsSection = () => {
	const reasons = [
		{
			title: 'Stylish bouquets by florists',
			details:
				'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.'
		},
		{
			title: 'On-time delivery',
			details:
				'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.'
		},
		{
			title: 'Safe payment',
			details:
				'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.'
		},
		{
			title: 'Subscription by your needs',
			details: `Enjoy the convenience of our tailored subscription service, delivering beautiful bouquets straight to your door on a schedule that suits you. Perfect for busy individuals or anyone who loves always having fresh flowers, our flexible plans save you time and money while ensuring your floral needs are effortlessly met.`
		}
	]

	return (
		<Grid container item xs={12} sx={{ border: '1px solid #121212', borderTop: 'none' }}>
			<Grid item xs={6} sx={{ p: '80px' }}>
				<Typography sx={{ fontWeight: 600, fontSize: '50px', lineHeight: '60px' }}>
					Why choose us?
				</Typography>
			</Grid>

			<Grid container item xs={6} sx={{ borderLeft: '1px solid #121212' }}>
				{reasons.map((item, index) => (
					<Grid
						item
						xs={12}
						key={index}
						sx={{ borderBottom: index < 3 ? '1px solid #121212' : 'none', p: '80px' }}>
						<Stack direction='column' spacing={3}>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: '38px',
									lineHeight: '45.6px',
									color: '121212'
								}}>
								{item.title}
							</Typography>
							<Typography
								sx={{
									fontWeight: 400,
									fontSize: '16px',
									lineHeight: '22.4px',
									color: 'rgba(18, 18, 18, 0.9)'
								}}>
								{item.details}
							</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default WhyChooseUsSection
