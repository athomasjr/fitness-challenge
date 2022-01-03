// import { CognitoUser } from '@aws-amplify/auth'

import {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useReducer,
} from 'react'
import * as AuthTypes from 'types/auth'
import { User } from '../../types/API'
import authReducer from './reducer'

const initialState: AuthTypes.IAuthState = {
	user: null,
	isAuthenticated: false,
	isLoading: false,
}

const storedAuth = localStorage.getItem(AuthTypes.LocalStorage.ISAUTHENTICATED)
const storedUser = localStorage.getItem(AuthTypes.LocalStorage.USER)

if (storedAuth === 'true' && storedUser && typeof storedUser === 'string') {
	initialState.isAuthenticated = true
	initialState.user = JSON.parse(storedUser)
}

console.log('AuthProvider loaded')

const AuthContext = createContext<AuthTypes.IAuthContext>({
	...initialState,
	setUser: (user) => {},
	clearUser: () => {},
})

function AuthProvider({
	children,
}: PropsWithChildren<{ children: ReactNode }>) {
	const [state, dispatch] = useReducer(authReducer, initialState)

	function setUser(user: User) {
		dispatch({ type: AuthTypes.AUTHACTIONENUM.SENDING_REQUEST })
		if (user) {
			dispatch({
				type: AuthTypes.AUTHACTIONENUM.SET_USER,
				payload: user,
			})

			dispatch({ type: AuthTypes.AUTHACTIONENUM.REQUEST_SUCCESS })
			localStorage.setItem(AuthTypes.LocalStorage.ISAUTHENTICATED, 'true')
			localStorage.setItem(AuthTypes.LocalStorage.USER, JSON.stringify(user))
			console.log('success')
		} else {
			dispatch({
				type: AuthTypes.AUTHACTIONENUM.REQUEST_FAILED,
			})
			console.log('failed')
		}
	}

	function clearUser() {
		dispatch({
			type: AuthTypes.AUTHACTIONENUM.CLEAR_USER,
		})
		localStorage.removeItem(AuthTypes.LocalStorage.ISAUTHENTICATED)
		localStorage.removeItem(AuthTypes.LocalStorage.USER)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoading: state.isLoading,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
				setUser,
				clearUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuthContext() {
	return useContext(AuthContext)
}

export { AuthContext, AuthProvider }
