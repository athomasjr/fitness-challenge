import { CssBaseline } from '@mui/material'
import Amplify from 'aws-amplify'
import { AuthProvider } from 'context/auth'
import Home from 'pages/home'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes as RouteTree } from 'react-router-dom'
import GlobalStyles from 'styles/globalStyles'
import awsconfig from '../aws-exports'

const Auth = lazy(() => import('pages/auth'))

Amplify.configure(awsconfig)

export default function Routes() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<GlobalStyles />
				{/* <CssBaseline /> */}
				<RouteTree>
					<Route index element={<Home />} />
					<Route
						path='auth'
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<Auth />
							</Suspense>
						}
					/>
				</RouteTree>
			</AuthProvider>
		</BrowserRouter>
	)
}
