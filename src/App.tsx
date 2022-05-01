import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import MainRouter from './routes/MainRouter'

const mdTheme = createTheme()

const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <BrowserRouter>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Header isOpen={isOpen} toggleDrawer={toggleDrawer} />
                    <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <MainRouter />
                    </Box>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
