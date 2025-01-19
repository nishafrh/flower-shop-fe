import { Box, Button, Stack, Typography } from '@mui/material'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons'
import { useState } from 'react'

const ReviewSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrevious = () =>
		setCurrentIndex(prevIndex => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))

	const handleNext = () =>
		setCurrentIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))

	const reviews = [
		{
			reviewer: 'Ronald Richard',
			desc: 'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!'
		},
		{ reviewer: 'Ronald', desc: 'Great quality flowers, will order again.' },
		{ reviewer: 'Richard', desc: 'Very satisfied with the delivery.' }
	]

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				p: '20px'
			}}>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: '22px',
					lineHeight: '28.4px',
					fontStyle: 'italic',
					width: '80%',
					m: 'auto'
				}}>
				{`"${reviews[currentIndex].desc}"`}
			</Typography>
			<Typography
				sx={{
					fontWeight: 500,
					fontSize: '16px',
					lineHeight: '19.2px',
					mt: 1.5
				}}>
				{`- ${reviews[currentIndex].reviewer}`}
			</Typography>
			<Button
				onClick={handlePrevious}
				sx={{
					position: 'absolute',
					top: '50%',
					left: '10px',
					transform: 'translateY(-50%)',
					minWidth: '40px',
					height: '40px',
					zIndex: 1
				}}>
				<IconChevronLeft size={24} color='#121212' />
			</Button>
			<Button
				onClick={handleNext}
				sx={{
					position: 'absolute',
					top: '50%',
					right: '10px',
					transform: 'translateY(-50%)',
					minWidth: '40px',
					height: '40px',
					zIndex: 1
				}}>
				<IconChevronRight size={24} color='#121212' />
			</Button>
			<Stack
				direction='row'
				spacing={1}
				sx={{
					justifyContent: 'center',
					mt: '16px'
				}}>
				{reviews.map((_, index) => (
					<Box
						key={index}
						sx={{
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							backgroundColor: index === currentIndex ? '#121212' : '#ccc',
							transition: 'background-color 0.3s'
						}}
					/>
				))}
			</Stack>
		</Box>
	)
}

export default ReviewSlider
