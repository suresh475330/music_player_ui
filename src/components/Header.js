import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../features/authSlice';
import { setSideBarOpen } from '../features/designSlice';

import avatarImg from '../assets/historySong.jpeg';

export default function Header() {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutDispatch = () => {
        handleClose();
        dispatch(logOut());
    }

    // 0E0E0E
    return (
        <Box sx={{ width: { xs: "100%", sm: "75%" } }} position="fixed">
            <AppBar sx={{ backgroundColor: "#0E0E0E" }} position="static">
                <Toolbar sx={{ display: "flex", justifyContent: { xs: "space-between", sm: "flex-end" } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
                        onClick={() => dispatch(setSideBarOpen())}
                    >
                        <MenuIcon />
                    </IconButton>

                    {user && (
                        <Tooltip title={user.name}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt={user.name} sx={{ bgcolor: "#000000" }} src={avatarImg} />
                            </IconButton>
                        </Tooltip>
                    )}

                    <Menu
                        id="basic-menu"
                        color='#282828'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }} >
                        <MenuItem onClick={logOutDispatch}>Logout</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBar>
        </Box>
    );
}