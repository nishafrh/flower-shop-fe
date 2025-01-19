import { Grid } from '@mui/material'

import TitleGrid from './TitleGrid'
import FlowersGrid from './FlowersGrid'
import flower1 from '../../../assets/mainSection/flower-1.svg'
import flower2 from '../../../assets/mainSection/flower-2.png'
import flower3 from '../../../assets/mainSection/flower-3.png'
import candels from '../../../assets/mainSection/candels.png'
import fresheners from '../../../assets/mainSection/fresheners.png'

const MainSection = () => (
	<Grid container item xs={12} sx={{ border: '1px solid #121212', width: '100%' }}>
		<TitleGrid />
		<FlowersGrid
			flowers={[
				{
					key: 'has-bottom',
					title: 'Fresh Flowers',
					img: flower1,
					imgAlt: 'fresh-flower',
					title2: 'Dried Flowers',
					img2: flower2,
					imgAlt2: 'dried-flower'
				}
			]}
		/>
		<Grid item xs={6} />
		<FlowersGrid
			flowers={[
				{
					key: 'has-bottom',
					title: 'Live Plants',
					img: flower3,
					imgAlt: 'live-plants',
					title2: 'Aroma Candels',
					img2: candels,
					imgAlt2: 'aroma-candels'
				}
			]}
		/>
		<Grid item xs={6} />
		<FlowersGrid
			flowers={[
				{
					title: 'Fresheners',
					img: fresheners,
					imgAlt: 'fresheners'
				}
			]}
		/>
	</Grid>
)

export default MainSection
