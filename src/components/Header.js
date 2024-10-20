import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Modern Walk</Link>
        </Typography>
        <Link to="/category/men's clothing" style={{ color: '#fff', marginRight: '10px' }}>Men's Clothing</Link>
        <Link to="/category/women's clothing" style={{ color: '#fff' }}>Women's Clothing</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
