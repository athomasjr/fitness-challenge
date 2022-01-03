import { CircularProgress, Grid } from '@mui/material'
import { Suspense } from 'react'

interface IMySuspenseProps {
	children: React.ReactNode
}

export default function MySuspense({ children }: IMySuspenseProps) {
	const fallback = (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: '100vh' }}
		>
			<CircularProgress />
		</Grid>
	)

	return <Suspense fallback={fallback}>{children}</Suspense>
}
