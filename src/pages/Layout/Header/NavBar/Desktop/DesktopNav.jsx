import React from 'react';
import {
  Box,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem
} from '@mui/material';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import AddIcon from '@mui/icons-material/Add';
import CropFreeIcon from '@mui/icons-material/CropFree';


const pages = ['Group introduction', 'corporate governance', 'ESG Management','Investment information','PR Center'];
const languages = ['English', 'Myanmar'];

const DesktopNav = () => {
  const [anchorElLang, setAnchorElLang] = React.useState(null);
  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <Toolbar 
      disableGutters 
      sx={{
          display: { xs: 'none', md: 'flex' }
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
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Hana Financial
        </Typography>
      </Box>
      <Box 
        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
      >
        {
          pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: '#000', display: 'block' }}
            >
              {page}
            </Button>
          ))
        }
      </Box>
      <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton size="large">
              <AddIcon fontSize="inherit"/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size="large">
              <CropFreeIcon fontSize="inherit"/>
            </IconButton>
          </Grid>
              <Grid item>
                <IconButton onClick={handleOpenLangMenu} size="large">
                  <LanguageIcon fontSize="inherit"/>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElLang}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElLang)}
                  onClose={handleCloseLangMenu}
                >
                  {
                    languages.map((language) => (
                      <MenuItem key={language} onClick={handleCloseLangMenu}>
                        <Typography textAlign="center">{language}</Typography>
                      </MenuItem>
                    ))
                  }
                </Menu>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <MenuIcon fontSize="inherit"/>
                </IconButton>
              </Grid>
          </Grid>
      </Box>
    </Toolbar>
  );
}
export default DesktopNav;