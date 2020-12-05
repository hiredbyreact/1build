import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TopNav from '.';
import ITopNav from './ITopNav';
import { withTheme } from "../../Theme"

export default {
    title: 'Navigation/TopNav',
    component: TopNav,
} as Meta;


const Template: Story<ITopNav> = (args) => withTheme(<TopNav {...args} />);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
