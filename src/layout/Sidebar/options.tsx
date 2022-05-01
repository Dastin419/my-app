import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'

import { PATH } from '../../utils/constants'

const mainOptions = [
    { id: 1, name: 'Home', icon: <DashboardIcon />, path: PATH.HOME },
    {
        id: 2,
        name: 'First Page',
        icon: <ShoppingCartIcon />,
        path: PATH.FIRST_PAGE,
    },
    {
        id: 3,
        name: 'Second Page',
        icon: <PeopleIcon />,
        path: PATH.SECOND_PAGE,
    },
]

export { mainOptions }
