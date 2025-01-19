import { Grid, Typography } from '@mui/material'

const Header = () => {
	const itemsNavBar = ['Sign In', 'Cart']
	const itemsNavBar2 = ['Shop', 'Contact']

	return (
		<Grid container sx={{ height: '83px', border: '1px solid #121212' }}>
			<NavBarGrid items={itemsNavBar} />

			<Grid item xs={3} sx={{ borderLeft: '1px solid #121212' }} />
			<Grid item xs={3} sx={{ borderRight: '1px solid #121212' }} />

			<NavBarGrid items={itemsNavBar2} />
		</Grid>
	)
}

export default Header

const NavBarGrid = ({ items }) => (
	<Grid container item xs={3}>
		<Grid
			item
			xs={6}
			sx={{
				borderRight: '1px solid #121212',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
			<Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19.2px' }}>
				{items[0]}
			</Typography>
		</Grid>
		<Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19.2px' }}>
				{items[1]}
			</Typography>
		</Grid>
	</Grid>
)
