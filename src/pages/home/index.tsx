import { Button } from '@mui/material'
import { useAuthContext } from 'context/auth'
import { Link } from 'react-router-dom'

export default function Home() {
	const auth = useAuthContext()

	console.log('auth', auth)

	return (
		<div>
			home
			<div style={{ display: 'flex', gap: '16px' }}>
				<Link to='auth'>auth</Link>
				<Link to='profile'>profile</Link>
			</div>
			<Button onClick={() => auth.clearUser()}>Log Out</Button>
		</div>
	)
}
