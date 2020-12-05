import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
	spacing: 2,
	typography,
	palette,
	overrides,
});

const themeProps = {
	theme,
};

const withTheme = (WrappedComponent: React.ReactNode) => (
	<ThemeProvider {...themeProps}>{WrappedComponent}</ThemeProvider>
);

export default theme;

export { withTheme };
