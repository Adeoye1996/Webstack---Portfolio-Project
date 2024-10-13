import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/admissions" onClick={handleDrawerToggle}>
        <ListItemText primary="Admissions" />
      </ListItem>
      <ListItem button component={Link} to="/courses" onClick={handleDrawerToggle}>
        <ListItemText primary="Courses" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            School Website
          </Typography>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <div style={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/admissions">Admissions</Button>
            <Button color="inherit" component={Link} to="/courses">Courses</Button>
	  <Button color="inherit" component={Link} to="/login">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
