import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Typography } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useAuthContext } from 'context/auth'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import MyTextField from '../common/my-textfield'

interface LoginFormInputs {
	email: string
	password: string
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Please provide a valid email address.')
		.trim()
		.required(),
	password: yup.string().trim().required(),
})

export default function Login() {
	const auth = useAuthContext()

	const methods = useForm<LoginFormInputs>({
		resolver: yupResolver(schema),
	})

	const {
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = methods

	const submitHandler: SubmitHandler<LoginFormInputs> = async (
		{ email, password },
		e
	) => {
		e?.preventDefault()
		try {
			const userConfig = await Auth.signIn(email, password)
			if (userConfig.signInUserSession) {
				auth.login(userConfig)
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
						Login
					</Typography>

					<MyTextField
						type='email'
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

					<Button
						disabled={!!isSubmitting}
						size='large'
						type='submit'
						variant='contained'
						color='primary'
						style={{ alignSelf: 'flex-start' }}
					>
						Login
					</Button>
				</Grid>
			</form>
		</FormProvider>
	)
}
