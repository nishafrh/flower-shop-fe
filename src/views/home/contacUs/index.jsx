import { Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandPinterest,
	IconBrandTelegram,
	IconBrandTwitter,
	IconMapPin,
	IconPhone
} from '@tabler/icons'

import store from '../../../assets/cotactUsSection/store.png'

export const IconsFollowUs = [
	IconBrandInstagram,
	IconBrandPinterest,
	IconBrandFacebook,
	IconBrandTwitter,
	IconBrandTelegram
]

const ContactUsSection = () => {
	const phones = ['+380980099777', '+380980099111']

	return (
		<Grid
			container
			item
			xs={12}
			sx={{
				border: '1px solid #121212',
				borderTop: 'none'
			}}>
			<Grid container item xs={6} id='left'>
				<Grid
					container
					item
					xs={12}
					gap={2.5}
					sx={{ p: '80px', borderBottom: '1px solid #121212' }}>
					<Grid item xs={12}>
						<Typography sx={{ fontWeight: 600, fontSize: '50px', lineHeight: '60px' }}>
							To Contact Us
						</Typography>
					</Grid>
					<Grid container item xs={12} gap={1.5}>
						<Grid item xs={12}>
							<Typography sx={{ fontWeight: 500, fontSize: '18px', lineHeight: '25.2px' }}>
								We will call you back
							</Typography>
						</Grid>
						<Grid container item xs={12} gap={2} sx={{ alignItems: 'center' }}>
							<Grid item xs>
								<TextField
									variant='outlined'
									placeholder='+62XXX XXXX XXXX'
									sx={{
										width: '100%',
										'& .MuiOutlinedInput-root': {
											borderRadius: 0
										}
									}}
								/>
							</Grid>
							<Grid item xs>
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
									BOOK A CALL
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid
						container
						item
						xs={12}
						sx={{ borderBottom: '1px solid #121212', alignItems: 'center', display: 'flex' }}>
						<Grid item xs sx={{ paddingX: '10px', paddingY: '16px' }}>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: '38px',
									lineHeight: '45.6px',
									textAlign: 'center'
								}}>
								Phone
							</Typography>
						</Grid>
						<Divider orientation='vertical' flexItem sx={{ borderColor: '#121212' }} />
						<Grid item xs sx={{ paddingX: '10px', paddingY: '16px' }}>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: '38px',
									lineHeight: '45.6px',
									textAlign: 'center'
								}}>
								Address
							</Typography>
						</Grid>
					</Grid>
					<Grid container item xs={12}>
						<Grid
							item
							xs={6}
							sx={{
								borderRight: '1px solid #121212',
								paddingY: '48px',
								paddingX: '24px',
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column'
							}}>
							<Stack direction='column' spacing={5}>
								{phones.map((item, index) => (
									<Typography
										key={index}
										sx={{
											display: 'flex',
											gap: '5px',
											fontWeight: 600,
											fontSize: '16px',
											lineHeight: '19.2px'
										}}>
										<IconPhone size='18px' stroke={2.5} /> {item}
									</Typography>
								))}
							</Stack>
						</Grid>
						<Grid item container xs={6} sx={{ paddingY: '48px', paddingX: '24px' }}>
							<Stack
								direction='column'
								spacing={5}
								sx={{
									alignItems: 'center',
									display: 'flex',
									flexDirection: 'column'
								}}>
								<Typography
									sx={{
										fontWeight: 500,
										fontSize: '14px',
										lineHeight: '16.8px',
										color: '#121212'
									}}>
									OPENING HOURS: 8 TO 11 P.M.
								</Typography>
								<Typography
									sx={{
										display: 'flex',
										gap: '5px',
										fontWeight: 600,
										fontSize: '16px',
										lineHeight: '19.2px',
										color: '#121212',
										alignItems: 'center',
										textAlign: 'center'
									}}>
									<IconMapPin size='20px' stroke={2.5} />
									15/4 Khreshchatyk Street, Kyiv
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid container item xs={6} sx={{ borderLeft: '1px solid #121212' }} id='right'>
				<Grid item xs={12}>
					<img src={store} title='store' alt='store' width='100%' height='100%' />
				</Grid>
				<Grid container item xs={12} sx={{ alignItems: 'center' }}>
					<Grid
						item
						xs={6}
						sx={{ borderRight: '1px solid #121212', paddingX: '10px', paddingY: '16px' }}>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: '38px',
								lineHeight: '45.6px',
								textAlign: 'center'
							}}>
							Follow us
						</Typography>
					</Grid>
					<Grid item xs={6} sx={{ paddingX: '10px', paddingY: '16px' }}>
						<Stack direction='row' sx={{ justifyContent: 'space-evenly' }}>
							{IconsFollowUs.map((Item, index) => (
								<Item key={index} />
							))}
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ContactUsSection
