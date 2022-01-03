import { Box, Divider, Grid, Typography } from '@mui/material'
import Login from 'components/login'
import Signup from 'components/signup'
import { useState } from 'react'

export default function Auth() {
	const [isSignup, setIsSignup] = useState(true)

	return (
		<Grid container direction='column' alignItems='center'>
			<Grid style={{ width: '40%' }}>
				{isSignup ? <Signup /> : <Login />}
				<Divider
					variant='fullWidth'
					sx={{ marginTop: '24px', marginBottom: '8px' }}
				/>
				<Box sx={{ display: 'inline-flex', gap: 1 }}>
					<Typography variant='body1'>
						{isSignup ? 'Already have an account?' : "Don't have an account?"}
					</Typography>
					<Typography
						color='primary'
						sx={{ cursor: 'pointer', fontWeight: 'bold' }}
						variant='button'
						onClick={() => setIsSignup(!isSignup)}
						component='span'
					>
						{isSignup ? 'Login' : 'Sign up'}
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}
