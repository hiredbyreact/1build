// .storybook/preview.js

import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
	figma: {
		name: 'Figma Design',
		styles: {
			width: '1500px',
			height: '1500px',
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...DEFAULT_VIEWPORT,
			...MINIMAL_VIEWPORTS,
			...customViewports,
		},
	},
};
