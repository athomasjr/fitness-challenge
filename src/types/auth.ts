import { CognitoUser } from '@aws-amplify/auth'
import { User } from './API'

export interface IAuthContext extends IAuthState {
	login: (userConfig: CognitoUser) => void
	logout: () => void
}

export interface IAuthState {
	// user: User | null
	userConfig: CognitoUser | null
}

export type AUTHACTIONTYPE =
	| {
			type: 'LOGIN'
			payload: CognitoUser
	  }
	| { type: 'LOGOUT' }
