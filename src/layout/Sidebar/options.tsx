import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const mainOptions = [
    { id: 1, name: 'Dashboard', icon: <DashboardIcon /> },
    { id: 2, name: 'Orders', icon: <ShoppingCartIcon /> },
    { id: 3, name: 'Customers', icon: <PeopleIcon /> },
    { id: 4, name: 'Reports', icon: <BarChartIcon /> },
    { id: 5, name: 'Integrations', icon: <LayersIcon /> },
];

export { mainOptions };
