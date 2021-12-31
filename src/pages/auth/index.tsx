import { Grid } from '@mui/material'
import Signup from 'components/signup'

export default function Auth() {
	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: '100vh' }}
		>
			<Grid style={{ width: '40%' }}>
				<Signup />
			</Grid>
		</Grid>
	)
}
