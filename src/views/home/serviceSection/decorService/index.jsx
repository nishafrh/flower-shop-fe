import { Button, Grid, Stack, Typography } from '@mui/material'

import weddingDecor from '../../../../assets/serviceSection/wedding-decor.png'

const DecorService = () => (
	<Grid
		container
		item
		xs={12}
		sx={{ border: '1px solid #121212', borderTop: 'none', position: 'relative' }}>
		<Grid item xs={12}>
			<img
				src={weddingDecor}
				title='wedding-decor'
				alt='wedding-decor'
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
			/>
		</Grid>
		<Grid
			container
			item
			xs={12}
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				alignItems: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				p: '80px'
			}}>
			<Grid item xs={12}>
				<Stack
					direction='column'
					spacing={3}
					sx={{
						width: '60%',
						margin: 'auto',
						textAlign: 'center',
						color: '#fff'
					}}>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: '16.8px'
						}}>
						SERVICE
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '50px',
							lineHeight: '60px',
							whiteSpace: 'nowrap'
						}}>
						Wedding & Event Decor
					</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25.2px'
						}}>
						Let our team of expert florists and designers create stunning, on-trend floral
						décor for your special day. Trust us to bring your vision to life.
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
				<Button
					variant='outlined'
					sx={{
						borderRadius: 0,
						border: '1px solid #fff',
						color: '#fff',
						paddingX: '24px',
						paddingTop: '16px',
						paddingBottom: '14px'
					}}>
					SUBSCRIBE NOW
				</Button>
			</Grid>
		</Grid>
	</Grid>
)

export default DecorService
