import * as AuthTypes from 'types/auth'

export default function authReducer(
	state: AuthTypes.IAuthState,
	action: AuthTypes.AUTHACTIONTYPE
) {
	switch (action.type) {
		case AuthTypes.AUTHACTIONENUM.SET_USER:
			return {
				...state,
				user: action.payload,
			}
		case AuthTypes.AUTHACTIONENUM.CLEAR_USER:
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		case AuthTypes.AUTHACTIONENUM.SENDING_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case AuthTypes.AUTHACTIONENUM.REQUEST_FAILED:
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
			}
		case AuthTypes.AUTHACTIONENUM.REQUEST_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
			}
		default:
			return state
	}
}
