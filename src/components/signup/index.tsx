import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Typography } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useAuthContext } from 'context/auth'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import MyTextField from '../common/my-textfield'
interface SignupFormInputs {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
}

const schema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.min(3, 'Must be at least 3 characters.')
		.max(15, 'Must be 15characters or less.')
		.required('First name is required'),
	lastName: yup
		.string()
		.trim()
		.min(3, 'Must be at least 3 characters.')
		.max(15, 'Must be 15 characters or less.')
		.required('Last name is required'),
	email: yup
		.string()
		.email('Please provide a valid email address.')
		.trim()
		.required(),
	password: yup
		.string()
		.trim()
		.required('Password is required')
		.matches(
			/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
			'Password must contain at least 8 characters, one uppercase, one number and one special character.'
		),
	confirmPassword: yup
		.string()
		.trim()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default function Signup() {
	const auth = useAuthContext()
	const methods = useForm<SignupFormInputs>({
		resolver: yupResolver(schema),
	})

	const {
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = methods

	const submitHandler: SubmitHandler<SignupFormInputs> = async (
		{ firstName, lastName, email, password },
		e
	) => {
		e?.preventDefault()
		try {
			const res = await Auth.signUp({
				username: email,
				password,
				attributes: {
					email,
					'custom:firstName': firstName,
					'custom:lastName': lastName,
				},
			})

			if (res.userSub) {
				auth.login(res.user)

				reset()
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<Grid
					container
					alignItems='center'
					direction='column'
					justifyContent='center'
					rowGap={{ xs: '8px', md: '16px' }}
				>
					<Typography variant='h2' component='h1'>
						Signup
					</Typography>
					<MyTextField
						name='firstName'
						label='First Name'
						error={!!errors.firstName}
						helperText={errors.firstName && errors.firstName?.message}
						fullWidth
					/>
					<MyTextField
						name='lastName'
						label='Last Name'
						error={!!errors.lastName}
						helperText={errors.lastName && errors.lastName?.message}
						fullWidth
					/>
					<MyTextField
						name='email'
						label='Email'
						error={!!errors.email}
						helperText={errors.email && errors.email?.message}
						fullWidth
					/>
					<MyTextField
						type='password'
						name='password'
						label='Password'
						error={!!errors.password}
						helperText={errors.password && errors.password?.message}
						fullWidth
					/>
					<MyTextField
						type='password'
						name='confirmPassword'
						label='Confirm Password'
						error={!!errors.confirmPassword}
						helperText={
							errors.confirmPassword && errors.confirmPassword?.message
						}
						fullWidth
					/>
					<Button
						disabled={!!isSubmitting}
						size='large'
						type='submit'
						variant='contained'
						color='primary'
						style={{ alignSelf: 'flex-start' }}
					>
						Signup
					</Button>
				</Grid>
			</form>
		</FormProvider>
	)
}
