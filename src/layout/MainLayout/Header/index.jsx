import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
import { IconMenu2, IconShoppingBag } from '@tabler/icons'

const Header = () => {
	const isLarge = useMediaQuery(theme => theme.breakpoints.up('lg'))

	const itemsNavBar = ['Sign In', 'Cart']
	const itemsNavBar2 = ['Shop', 'Contact']

	const NavBarGrid = ({ items, keyNav }) => (
		<Grid container item xs={3} sx={{ justifyContent: 'space-between' }}>
			<Grid
				item
				md={3}
				lg={6}
				sx={{
					borderRight:
						keyNav === 'left' || (keyNav === 'right' && isLarge)
							? '1px solid #121212'
							: 'none',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				{isLarge && (
					<Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19.2px' }}>
						{items[0]}
					</Typography>
				)}
				{keyNav === 'left' && !isLarge && (
					<IconButton aria-label='menu-items'>
						<IconMenu2 />
					</IconButton>
				)}
			</Grid>
			<Grid
				item
				md={3}
				lg={6}
				sx={{
					borderLeft: !isLarge ? '1px solid #121212' : 'none',
					display: keyNav === 'left' && !isLarge ? 'none' : 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				{isLarge && (
					<Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19.2px' }}>
						{items[1]}
					</Typography>
				)}
				{!isLarge && (
					<IconButton aria-label='menu-items'>
						<IconShoppingBag />
					</IconButton>
				)}
			</Grid>
		</Grid>
	)

	return (
		<Grid
			container
			sx={{
				height: '83px',
				border: '1px solid #121212',
				boxSizing: 'border-box'
			}}>
			<NavBarGrid items={itemsNavBar} keyNav='left' />

			<Grid item xs={3} sx={{ borderLeft: isLarge ? '1px solid #121212' : 'none' }} />
			<Grid item xs={3} sx={{ borderRight: isLarge ? '1px solid #121212' : 'none' }} />

			<NavBarGrid items={itemsNavBar2} keyNav='right' />
		</Grid>
	)
}

export default Header
