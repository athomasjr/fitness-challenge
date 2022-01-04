import { List, ListItem, ListItemText } from '@mui/material'
import ListItemLink from 'components/common/list-item-link'
import { Link } from 'react-router-dom'

const links: { to: string; primary: string }[] = [
	{ to: '/', primary: 'Home' },
	{ to: 'profile', primary: 'Profile' },
]

export default function NavLinks() {
	return (
		<List component='nav'>
			{links.map((link) => (
				<ListItemLink key={link.to} {...link} />
			))}
		</List>
	)
}
