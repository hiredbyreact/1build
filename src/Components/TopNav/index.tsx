import React from 'react';

import { AppBar, Toolbar, Button, IconButton, Box, MenuItem } from '@material-ui/core';


import ITopNav from "./ITopNav";
import useStyles from "./TopNav.styles";
import { Dropdown } from "../Dropdown";



const TopNav: React.FC<ITopNav> = ({ fullWidth = false }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src="https://assets-global.website-files.com/5e12ab24946b120844bd17a7/5f6e372d2a7e37269072ab42_logo-light.svg" loading="lazy" alt="1build-logo" />
                    </IconButton>
                    <Box component="div" className={classes.mainNav}>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Services</Button>
                        <Dropdown label="More">
                            <MenuItem onClick={() => console.log("Clicked Pricing")}>Pricing</MenuItem>
                            <MenuItem onClick={() => console.log("Clicked Pricing")}> How it works</MenuItem>
                            <MenuItem onClick={() => console.log("Clicked Pricing")}> Careers</MenuItem>
                        </Dropdown>
                    </Box>
                    <Button color="primary" variant="contained">SIGN UP</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export { TopNav, ITopNav }