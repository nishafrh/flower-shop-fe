import { Button, Grid, TextField, Typography } from '@mui/material'

const SubEmailSection = () => (
	<Grid container item xs={3} gap={3} sx={{ p: '40px', borderRight: '1px solid #121212' }}>
		<Grid item xs={12}>
			<Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '22.4px' }}>
				Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day,
				Christmas... Reminds you 7 days before. No spam or sharing your address
			</Typography>
		</Grid>
		<Grid container item xs={12} gap={2} sx={{ alignItems: 'center' }}>
			<Grid item xs={12}>
				<TextField
					variant='outlined'
					type='email'
					placeholder='Your Email'
					sx={{
						width: '100%',
						'& .MuiOutlinedInput-root': {
							borderRadius: 0
						}
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant='contained'
					sx={{
						backgroundColor: '#121212',
						'&:hover': {
							backgroundColor: '#121212'
						},
						borderRadius: 0,
						boxShadow: 'none',
						pt: '16px',
						pb: '14px',
						width: '100%'
					}}>
					REMIND
				</Button>
			</Grid>
		</Grid>
	</Grid>
)

export default SubEmailSection
