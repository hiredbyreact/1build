import React from 'react';

import { Box, Typography } from '@material-ui/core';

import ITriangleNumber from './ITriangleNumber';
import useStyles from './TriangleNumber.styles';

const TriangleNumber: React.FC<ITriangleNumber> = ({ children }) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.triangleNumber}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="14" width="20" height="20" rx="2" transform="rotate(-45 0 14)" stroke="#586CB3" />
            </svg>
            <Box component="div">
                <Typography variant="body1">{children}</Typography>
            </Box>
        </Box>
    );
};

export default TriangleNumber;
