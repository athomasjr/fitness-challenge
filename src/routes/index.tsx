// import { CssBaseline } from '@mui/material'
import Amplify from 'aws-amplify'
import { AuthProvider } from 'context/auth'
import Home from 'pages/home'
// import Profile from 'pages/profile'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes as RouteTree } from 'react-router-dom'
import GlobalStyles from 'styles/globalStyles'
import awsconfig from '../aws-exports'
import AuthRoute from './auth-route'

const Auth = lazy(() => import('pages/auth'))
const Profile = lazy(() => import('pages/profile'))

Amplify.configure(awsconfig)

export default function Routes() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<GlobalStyles />
					{/* <CssBaseline /> */}
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
				</Suspense>
			</BrowserRouter>
		</AuthProvider>
	)
}
