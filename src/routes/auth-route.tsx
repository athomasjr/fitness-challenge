import { useAuthContext } from 'context/auth'
import { Navigate, RouteProps, useLocation } from 'react-router-dom'

interface IAuthRouteProps extends RouteProps {
	children: JSX.Element
}

export default function AuthRoute({ children }: IAuthRouteProps) {
	const auth = useAuthContext()
	const location = useLocation()

	console.log('AuthRoute:', auth)

	// if (auth.isLoading) {
	// 	return <div>Loading...</div>
	// }

	if (!auth.isAuthenticated) {
		return <Navigate to='/auth' state={{ from: location }} replace />
	}

	return children
}
