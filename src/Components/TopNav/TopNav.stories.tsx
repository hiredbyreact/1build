import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TopNav from '.';
import { withTheme } from "../../Theme"

export default {
    title: 'Navigation/TopNav',
    component: TopNav,
} as Meta;


type ITopNav = TopNav.type;
const Template: Story<ITopNav> = (args) => withTheme(<TopNav {...args} />);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
