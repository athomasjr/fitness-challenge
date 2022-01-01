import { CognitoUser } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'
import {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import { useNavigate } from 'react-router-dom'
import * as AuthTypes from 'types/auth'

const initialState: AuthTypes.IAuthState = {
	// user: null,
	userConfig: null,
}

const AuthContext = createContext<AuthTypes.IAuthContext>({
	userConfig: null,
	login: (userConfig) => {},
	logout: () => {},
})

function authReducer(
	state: AuthTypes.IAuthState,
	action: AuthTypes.AUTHACTIONTYPE
) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				userConfig: action.payload,
			}
		case 'LOGOUT':
			return {
				...state,
				userConfig: null,
			}
		default:
			return state
	}
}

const AuthProvider = ({
	children,
}: PropsWithChildren<{ children: ReactNode }>) => {
	const [state, dispatch] = useReducer(authReducer, initialState)
	const navigate = useNavigate()

	useEffect(() => {
		console.log('AuthState:', state)
	}, [state])

	useEffect(() => {
		checkAuth()
	}, [])

	function login(userConfig: CognitoUser) {
		dispatch({
			type: 'LOGIN',
			payload: userConfig,
		})
		navigate('/')
	}

	function logout() {
		dispatch({
			type: 'LOGOUT',
		})
	}

	async function checkAuth() {
		try {
			const user = await Auth.currentAuthenticatedUser()
			if (user) {
				state.userConfig = user
				navigate('/')
			} else {
				state.userConfig = null
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				userConfig: state.userConfig,
				login,
				logout,
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
