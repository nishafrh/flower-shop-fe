import { IconsFollowUs } from '../contacUs'
import { Grid, Stack, Typography } from '@mui/material'

const ContactUsSection = () => {
	const contactDetails = [
		{
			title: 'Address',
			value: '15/4 Khreshchatyk Street, Kyiv'
		},
		{
			title: 'Phone',
			value: '+380980099777'
		},
		{
			title: 'General Enquiry:',
			value: 'Kiev.Florist.Studio@gmail.com'
		}
	]

	return (
		<Grid container item xs={3} gap={2} sx={{ p: '40px', borderRight: '1px solid #121212' }}>
			<Grid item xs={12}>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '21px',
						lineHeight: '25.2px',
						color: '#808080'
					}}>
					Contact Us
				</Typography>
			</Grid>
			<Grid container item xs={12} gap={2}>
				{contactDetails.map((item, index) => (
					<Grid container item xs={12} gap={1} key={index}>
						<Grid item xs={12}>
							<Typography
								sx={{
									fontWeight: 400,
									fontSize: '14px',
									lineHeight: '16.8px',
									color: '#808080'
								}}>
								{item.title}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: '16px',
									lineHeight: '19.2px',
									color: '#121212'
								}}>
								{item.value}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Grid>
			<Grid container item xs={12} gap={0} sx={{ mt: 1 }}>
				<Grid item xs={12}>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '21px',
							lineHeight: '25.2px',
							color: '#808080'
						}}>
						Follow Us
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Stack direction='row' sx={{ justifyContent: 'space-between' }}>
						{IconsFollowUs.map((Item, index) => (
							<Item key={index} />
						))}
					</Stack>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ContactUsSection
