import React from 'react';

import { Button } from '@material-ui/core';

import ICTABtn from './ICTABtn';
import useStyles from './CTABtn.styles';

const CTABtn: React.FC<ICTABtn> = ({ children }) => {
    const classes = useStyles();

    return (
        <Button className={classes.ctaBtn}>
            {children}
            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="6.5" r="1" fill="#2F80ED" />
                <rect x="3" y="5.5" width="15" height="2" rx="1" fill="#2F80ED" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 0.707092C13.7308 0.316589 13.0976 0.316589 12.7071 0.707092C12.3165 1.09763 12.3165 1.7308 12.7071 2.12131L16.9749 6.3891L12.7071 10.6569C12.3166 11.0474 12.3166 11.6805 12.7071 12.071C13.0977 12.4616 13.7308 12.4616 14.1214 12.071L19.0711 7.12131C19.273 6.9194 19.3705 6.65277 19.3637 6.38824C19.37 6.1243 19.2725 5.85828 19.0711 5.65686L14.1213 0.707092Z" fill="#2F80ED" />
            </svg>
        </Button>
    );
};

export default CTABtn;
