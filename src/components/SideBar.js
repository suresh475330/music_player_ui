import './SideBar.css';
import logo from '../assets/musicLogo.png';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSideBarOpen } from '../features/designSlice';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function SideBar() {

  const { user } = useSelector((state) => state.auth);

  const { sideBarOpen } = useSelector((state) => state.design);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const [isSmallDevice, setIsSmallDevice] = useState(width <= 600 ? true : false);

  function closeTab() {
    if (isSmallDevice) {
      dispatch(setSideBarOpen())
    }
  }

  useEffect(() => {

    setIsSmallDevice(width <= 600 ? true : false);

  }, [width])

  return (
    <aside className={sideBarOpen ? 'toggleSideBar' : 'sideBar'}>

      <List
        component="nav"
        subheader={
          <ListSubheader component="h4" sx={{ backgroundColor: "black", color: "#fff", fontSize: { xs: "1em", sm: "1.5rem" }, display: "flex", alignItems: "center" }} >
            <ListItemIcon>

              <img src={logo} alt='logo' width={30} />
            </ListItemIcon>
            <Typography >Play On</Typography>
            <IconButton onClick={() => dispatch(setSideBarOpen())} sx={{ display: { xs: "block", sm: "none" }, ml: 2, ":hover": { backgroundColor: "#282828" } }}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>

          </ListSubheader>
        }
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton onClick={closeTab} sx={{ ":hover": { backgroundColor: "#282828" } }}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>

        <Link to="search" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton onClick={closeTab} sx={{ ":hover": { backgroundColor: "#282828" } }}>

            <ListItemIcon>
              <SearchIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </Link>

        <Link to="library" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton onClick={closeTab} sx={{ ":hover": { backgroundColor: "#282828" } }}>
            <ListItemIcon>
              <LibraryMusicIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Your Library" />
          </ListItemButton>
        </Link>

        {user?.roal === "admin" && (

          <Link to="adminDashboard" style={{ textDecoration: "none", color: "white" }}>
            <ListItemButton onClick={closeTab} sx={{ ":hover": { backgroundColor: "#282828" } }}>
              <ListItemIcon>
                <AdminPanelSettings sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Admin Dashboard" />
            </ListItemButton>
          </Link>
        )}


      </List>
    </aside>
  );
}
