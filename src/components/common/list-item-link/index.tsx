import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface IListItemLinkProps extends LinkProps {
	primary: string
	icon?: JSX.Element
}

export default function ListItemLink({
	to,
	primary,
	icon,
}: IListItemLinkProps) {
	const renderLink = React.useMemo(
		() =>
			React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
				(itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />
			),
		[to]
	)

	return (
		<li>
			<ListItem button component={renderLink}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItem>
		</li>
	)
}
