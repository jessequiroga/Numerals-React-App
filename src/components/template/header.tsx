import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import QueueMusic from '@material-ui/icons/QueueMusic';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from "react-router-dom";
import SongList from "../songs/SongList";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function Header() {
  
  const classes = useStyles();

  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

  const toggleDrawer = (side:any, open:any) => (event:any) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [side]: open });
  };


  const sideList = (side:any) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
            <ListItem 
              button 
              key="home"
              component={NavLink} to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem 
              button 
              key="songs"
              component={NavLink} to="/songs">
              <ListItemIcon><QueueMusic /></ListItemIcon>
              <ListItemText primary="Songs" />
            </ListItem>
            

            <ListItem 
              button 
              key="create-song"
              color="secondary"
              component={NavLink} to="/new/empty">
              <ListItemIcon color="secondary"><AddIcon /></ListItemIcon>
              <ListItemText primary="New Song" />
            </ListItem>
        </List>
        <Divider />
        <h3>Songs </h3>
       <SongList />
      </div>
  );

  return (
    <AppBar position="static">
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Toolbar>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Numerals
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;