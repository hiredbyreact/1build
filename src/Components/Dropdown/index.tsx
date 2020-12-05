import React, { useState } from 'react';

import { Box, Button, Menu } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';


import IDropdown from "./IDropdown";
import useStyles from "./Dropdown.styles";
import DropDown from '../CTABtn/ICTABtn';



const Dropdown: React.FC<IDropdown> = ({ children, label }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e: React.ChangeEvent<HTMLInputElement>) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);


    const DisplayIco = !!anchorEl ? ExpandLessIcon : ExpandMoreIcon;

    return (<Box className={classes.ddMenu}>
        <Button color="inherit" aria-haspopup="true" onClick={handleOpen}>{label} <DisplayIco /></Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {children}
        </Menu>
    </Box>
    );
}

export default Dropdown;