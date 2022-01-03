// import { CognitoUser } from '@aws-amplify/auth'
import { User } from './API'

export interface IAuthContext extends IAuthState {
	setUser: (user: User) => void
	clearUser: () => void
}

export enum LocalStorage {
	USER = 'user',
	ISAUTHENTICATED = 'isAuthenticated',
}

export interface IAuthState {
	user: User | null | undefined
	isAuthenticated: boolean
	isLoading: boolean
}

export enum AUTHACTIONENUM {
	SET_USER = 'SET_USER',
	CLEAR_USER = 'CLEAR_USER',
	SENDING_REQUEST = 'SENDING_REQUEST',
	REQUEST_FAILED = 'REQUEST_FAILED',
	REQUEST_SUCCESS = 'REQUEST_SUCCESS',
	SET_AUTH = 'SET_AUTH',
}

export type AUTHACTIONTYPE =
	| {
			type: AUTHACTIONENUM.SET_USER
			payload: User
	  }
	| { type: AUTHACTIONENUM.CLEAR_USER }
	| { type: AUTHACTIONENUM.SENDING_REQUEST }
	| { type: AUTHACTIONENUM.REQUEST_FAILED }
	| { type: AUTHACTIONENUM.REQUEST_SUCCESS }
