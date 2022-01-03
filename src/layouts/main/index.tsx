import { Drawer, Grid, Typography } from '@mui/material'

interface IMainLayoutProps {
	children: React.ReactNode
}

const drawerWidth = 240

export default function MainLayout({ children }: IMainLayoutProps) {
	return (
		<Grid sx={{ minHeight: '100vh', display: 'flex' }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='permanent'
				anchor='left'
			>
				<Typography variant='h5'>My 75 Hard</Typography>
			</Drawer>
			<Grid
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
				}}
			>
				{children}
			</Grid>
		</Grid>
	)
}
