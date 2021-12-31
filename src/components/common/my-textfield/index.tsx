import {
	StandardTextFieldProps,
	TextField,
	TextFieldProps,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface MyTextFieldProps extends StandardTextFieldProps {
	name: string
}

export default function MyTextField({ name, ...props }: MyTextFieldProps) {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=''
			render={({ field }) => <TextField {...field} {...props} />}
		/>
	)
}
