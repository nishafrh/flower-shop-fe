import { Grid, Typography } from '@mui/material'

const AboutUsSection = () => {
	const about1 = ['Our story', 'Blog']
	const about2 = ['Shipping & returns', 'Terms & conditions', 'Privacy policy']

	return (
		<Grid item xs={3} sx={{ p: '40px', display: 'block' }}>
			<Grid container item xs={12} gap={2}>
				<Grid item xs={12}>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '21px',
							lineHeight: '25.2px',
							color: '#808080'
						}}>
						About Us
					</Typography>
				</Grid>
				<Grid container item xs={12} gap={3}>
					<Grid container item xs={12} gap={1}>
						{about1.map((item, index) => (
							<Grid item xs={12} key={index}>
								<Typography
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '19.2px',
										color: '#121212'
									}}>
									{item}
								</Typography>
							</Grid>
						))}
					</Grid>
					<Grid container item xs={12} gap={1}>
						{about2.map((item, index) => (
							<Grid item xs={12} key={index}>
								<Typography
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '19.2px',
										color: '#121212'
									}}>
									{item}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default AboutUsSection
