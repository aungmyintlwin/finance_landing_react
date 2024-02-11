//lib
import React from 'react';
import { 
  AppBar, 
  Container,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer
} from '@mui/material';
//custom 
import DesktopNav from './Desktop/DesktopNav'
import MobileNav from './Mobile/MobileNav';


const navItems = ['Group introduction', 'corporate governance', 'ESG Management','Investment information','PR Center'];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ py: 2,bgcolor: 'green',color: 'white' }}>
        Hana Financial
      </Typography>
      <Divider />
      <List>
        {
          navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))
        }
        <Divider />
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={'Hana Network'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="fixed" sx={{bgcolor: '#fff',color: '#000'}}>
        <Container maxWidth="xl" sx={{bgcolor: '#fff',color: '#000'}}>
          <DesktopNav/>
          <MobileNav openDrawer={handleDrawerToggle}/>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default NavBar;
