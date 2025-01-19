import { LinearProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoaderWrapper = styled('div')({
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: 1301,
	width: '100%'
})

// ==============================|| LOADER ||============================== //

function Loader() {
	return (
		<LoaderWrapper>
			<LinearProgress color='black' />
		</LoaderWrapper>
	)
}

export default Loader
