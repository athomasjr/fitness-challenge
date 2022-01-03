import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Amplify from 'aws-amplify'
import MySuspense from 'components/common/my-suspense/index'
import { AuthProvider } from 'context/auth'
import MainLayout from 'layouts/main'
import Home from 'pages/home'
// import Profile from 'pages/profile'
import { lazy } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes as RouteTree,
} from 'react-router-dom'
import globalStyles from 'styles/globalStyles'
import theme from 'styles/theme'
import awsconfig from '../aws-exports'
import AuthRoute from './auth-route'

const Auth = lazy(() => import('pages/auth'))
const Profile = lazy(() => import('pages/profile'))

Amplify.configure(awsconfig)

export default function Routes() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				{globalStyles}
				<Router>
					<MainLayout>
						<CssBaseline />
						<MySuspense>
							<RouteTree>
								<Route index element={<Home />} />
								<Route path='auth' element={<Auth />} />
								<Route
									path='profile'
									element={
										<AuthRoute>
											<Profile />
										</AuthRoute>
									}
								/>
							</RouteTree>
						</MySuspense>
					</MainLayout>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	)
}
