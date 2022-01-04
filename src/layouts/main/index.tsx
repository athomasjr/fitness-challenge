import { Grid } from '@mui/material'
import Sidebar from 'components/navigation/sidebar'

interface IMainLayoutProps {
	children: React.ReactNode
}

export default function MainLayout({ children }: IMainLayoutProps) {
	return (
		<Grid sx={{ minHeight: '100vh', display: 'flex' }}>
			<Sidebar />

			<Grid
				sx={{
					// width: `calc(100% - ${drawerWidth}px)`,
					width: '100%',
				}}
			>
				{children}
			</Grid>
		</Grid>
	)
}
