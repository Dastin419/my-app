import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MainRouter from './routes/MainRouter';

const mdTheme = createTheme();

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
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
                    {/*    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>*/}
                    <MainRouter />
                    {/*    </Container>*/}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
