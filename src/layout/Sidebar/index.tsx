import React from 'react'
import { useLocation } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import { ToggleSidebarProps } from '../types'
import { mainOptions } from './options'
import Link from '../../components/Link'
import Drawer from './styles'

const Sidebar = ({ isOpen, toggleDrawer }: ToggleSidebarProps) => {
    const location = useLocation()

    return (
        <Drawer variant="permanent" open={isOpen}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                By Dmytro Lazarenko
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainOptions.map((item) => (
                    <Link to={item.path} key={item.id}>
                        <ListItemButton
                            selected={location.pathname === item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar
