import { Button, Grid, Stack, Typography } from '@mui/material'

const AboutUsSection = () => (
	<Grid container item xs={12} sx={{ border: '1px solid #121212', borderTop: 'none' }}>
		<Grid
			item
			xs={12}
			lg={6}
			sx={{ p: '80px', borderBottom: { lg: 'none', xs: '1px solid #121212' } }}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: '50px',
					lineHeight: '60px'
				}}>
				About us
			</Typography>
		</Grid>

		<Grid
			container
			item
			xs={12}
			lg={6}
			gap={7}
			sx={{ borderLeft: { md: 'none', lg: '1px solid #121212' }, p: '80px' }}>
			<Grid item xs={12}>
				<Stack direction='column' spacing={3}>
					<Typography
						sx={{ fontWeight: 500, fontSize: '14px', lineHeight: '16.8px', color: '121212' }}>
						OUR STORY
					</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '38px',
							lineHeight: '45.6px',
							color: '#121212'
						}}>
						Kyiv LuxeBouquets
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: '16px',
							lineHeight: '22.4px',
							color: 'rgba(18, 18, 18, 0.9)'
						}}>
						We are a modern local floral studio, which specializes in the design and delivery
						of unique bouquets. We have the best florists who carefully select each look, our
						studio cooperates directly with farms for growing different flowers, so we always
						have fresh flowers, which are collected by our florists in exquisite bouquets. We
						have a collection of fresh bouquets, collections of dried bouquets, house plants,
						as well as fragrant candles from luxury brands to create the perfect atmosphere.
						Make someone's day amazing by sending flowers, plants and gifts the same or next
						day. Ordering flowers online has never been easier.
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant='outlined'
					sx={{
						borderRadius: 0,
						border: '1px solid #121212',
						color: '#121212',
						paddingX: '24px',
						paddingTop: '16px',
						paddingBottom: '14px'
					}}>
					LEARN MORE
				</Button>
			</Grid>
		</Grid>
	</Grid>
)

export default AboutUsSection
