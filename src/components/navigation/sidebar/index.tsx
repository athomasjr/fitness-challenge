import { Drawer, Typography } from '@mui/material'
import NavLinks from '../nav-links'

export default function Sidebar() {
	const drawerWidth = 240

	return (
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
			<Typography variant='h5' component='div'>
				My 75 Hard
			</Typography>
			<NavLinks />
		</Drawer>
	)
}
