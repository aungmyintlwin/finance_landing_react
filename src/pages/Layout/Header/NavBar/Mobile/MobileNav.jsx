import React from 'react';
import {
    Box,
    Grid,
    Toolbar,
    IconButton,
    Typography
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

const MobileNav = ({openDrawer}) => {

  return (
        <Toolbar 
            disableGutters 
            sx={{
                display: { xs: 'flex', md: 'none' }
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Hana Financial
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 0,display: { xs: 'flex', md: 'none' } }}>
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton size="large">
                            <AddIcon fontSize="inherit"/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={openDrawer} size="large">
                            <MenuIcon fontSize="inherit"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Toolbar>
  );
}
export default MobileNav;