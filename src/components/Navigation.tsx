import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [['Expertise', 'expertise'], ['History', 'history'], ['Projects', 'projects'], ['Contact', 'contact']];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = document.getElementById("navigation");
      
      if (navbar) {
        const scrolled = currentScrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }

      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }

      // Always show nav at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''} ${isVisible ? ' visible' : ' hidden'}`}
        sx={{ 
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'fixed',
          top: 0,
          borderRadius: 0,
          padding: '8px 16px',
        }}
      >
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '32px' }} />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon 
              onClick={() => modeChange()}
              sx={{ fontSize: '32px' }}
            />
          ) : (
            <DarkModeIcon 
              onClick={() => modeChange()}
              sx={{ fontSize: '32px' }}
            />
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              background: mode === 'dark' 
                ? 'rgba(0, 0, 0, 0.15) !important' 
                : 'rgba(255, 255, 255, 0.5) !important',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              borderRight: mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.18)'
                : '1px solid rgba(0, 0, 0, 0.15)',
              boxShadow: mode === 'dark'
                ? `
                  0 1px 0 rgba(255, 255, 255, 0.1) inset,
                  0 4px 30px rgba(0, 0, 0, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.05) inset
                `
                : `
                  0 1px 0 rgba(0, 0, 0, 0.08) inset,
                  0 4px 30px rgba(0, 0, 0, 0.15),
                  0 0 0 1px rgba(0, 0, 0, 0.05) inset
                `,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;