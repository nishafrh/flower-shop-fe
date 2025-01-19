import { Grid, Stack, Typography } from '@mui/material'

import weddingDecor from '../../../../assets/serviceSection/wedding-decor.png'
import Button1 from '../../../../ui-component/button/Button1'

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
				backgroundColor: 'rgba(0, 0, 0, 0.5)'
			}}>
			<Grid item xs={12}>
				<Stack
					direction='column'
					spacing={3}
					sx={{
						width: '50%',
						margin: 'auto',
						textAlign: 'center'
					}}>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: '16.8px',
							color: '#fff'
						}}>
						SERVICE
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '50px',
							lineHeight: '60px',
							color: '#fff',
							whiteSpace: 'nowrap'
						}}>
						Wedding & Event Decor
					</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25.2px',
							color: '#fff'
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
				<Button1
					label='SUBSCRIBE NOW'
					sx={{
						color: '#fff',
						border: '1px solid #fff',
						'&:hover': {
							border: '1px solid #fff'
						}
					}}
				/>
			</Grid>
		</Grid>
	</Grid>
)

export default DecorService
