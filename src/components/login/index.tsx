import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Typography } from '@mui/material'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { useAuthContext } from 'context/auth'
import { getUser } from 'graphql/queries'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { GetUserQuery, User } from '../../types/API'
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
	const navigate = useNavigate()

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
			if (userConfig) {
				const res = (await API.graphql(
					graphqlOperation(getUser, { id: userConfig.attributes.sub })
				)) as { data: GetUserQuery }

				const user = res.data.getUser as User

				auth.setUser(user)
				navigate('/profile')
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
