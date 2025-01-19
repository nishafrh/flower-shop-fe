import { Button } from '@mui/material'

const Button1 = ({ label, sx, ...params }) => (
	<Button
		{...params}
		variant='outlined'
		sx={{
			borderRadius: 0,
			border: '1px solid #121212',
			'&:hover': {
				border: '1px solid #121212'
			},
			color: '#121212',
			paddingX: '24px',
			paddingTop: '16px',
			paddingBottom: '14px',
			...sx
		}}>
		{label}
	</Button>
)

export default Button1
