import { useAuthContext } from 'context/auth'

export default function Profile() {
	const auth = useAuthContext()
	console.log('Profile:', auth)

	return <h1>profile page</h1>
}
