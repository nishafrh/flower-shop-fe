import { Grid, Typography } from '@mui/material'

const FlowersGrid = ({ flowers }) => (
	<Grid container item xs={6} sx={{ borderLeft: '1px solid #121212' }}>
		{flowers.map((item, index) => (
			<Grid container item xs={12} key={index}>
				<Grid
					item
					xs={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRight: '1px solid #121212'
					}}>
					<Typography sx={{ fontWeight: 500, fontSize: '38px' }}>{item.title}</Typography>
				</Grid>
				<Grid item xs={6}>
					<img
						src={item.img}
						title={item.imgAlt}
						alt={item.imgAlt}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'fill',
							objectPosition: 'center'
						}}
					/>
				</Grid>
				{item.img2 && item.imgAlt2 && item.title2 && (
					<>
						<Grid
							item
							xs={6}
							sx={{
								borderTop: '1px solid #121212',
								borderRight: '1px solid #121212',
								borderBottom: item.key === 'has-bottom' ? '1px solid #121212' : undefined
							}}>
							<img
								src={item.img2}
								title={item.imgAlt2}
								alt={item.imgAlt2}
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
						</Grid>
						<Grid
							item
							xs={6}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								borderTop: '1px solid #121212',
								borderBottom: item.key === 'has-bottom' ? '1px solid #121212' : undefined
							}}>
							<Typography sx={{ fontWeight: 500, fontSize: '38px' }}>
								{item.title2}
							</Typography>
						</Grid>
					</>
				)}
			</Grid>
		))}
	</Grid>
)

export default FlowersGrid
