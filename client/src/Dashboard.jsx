import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaCartArrowDown, FaProductHunt, FaSearch } from 'react-icons/fa';
import {BsLockFill} from "react-icons/bs";
import image1 from './components/css/images/jhlogo.png';
import HomeRounded from '@mui/icons-material/HomeRounded';
import Category from '@mui/icons-material/Category';
import { Logout, PowerSettingsNew, Settings, ShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
;
const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Typography variant="h6" noWrap>
       
        </Typography>
          <Typography variant="h4" noWrap display='inline'component="div">
           JOJOHOME
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem button>
                <ListItemIcon>
               <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            
          </List>
       
        <List>
            
            <ListItem button>
              <ListItemIcon>
             <Category/>
              </ListItemIcon>
              <ListItemText primary='Categories' />
            </ListItem>
          
        </List>
        <List>
            
            <ListItem button>
              <ListItemIcon>
             <HomeRounded/>
              </ListItemIcon>
              <ListItemText primary='Products' />
            </ListItem>
          
        </List>
        <List>
            
            <ListItem button>
              <ListItemIcon>
             <ShoppingCart/>
              </ListItemIcon>
              <ListItemText primary='Order' />
            </ListItem>
          
        </List>
        <List>
            
            <ListItem button>
              <ListItemIcon>
             <Settings/>
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
          
        </List>
          <Divider />
          <List>
            
            <ListItem button>
              <ListItemIcon>
             <PowerSettingsNew/>
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
        </List>
        <Divider/>
        </Box>
      </Drawer>
      <main className={ClassNames.content}>
        <Toolbar />
     
      </main>
    </Box>
  );
}