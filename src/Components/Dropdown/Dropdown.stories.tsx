import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MenuItem } from "@material-ui/core"
import Dropdown from '.';
import IDropdown from './IDropdown';
import { withTheme } from "../../Theme"

export default {
    title: 'Button/Dropdown',
    component: Dropdown,
} as Meta;

const Template: Story<IDropdown> = (args) => withTheme(<Dropdown {...args} />);

export const Display = Template.bind({});
Display.args = {
    label: "More",
    children: <>
        <MenuItem onClick={() => console.log("Clicked Pricing")}>Pricing</MenuItem>
        <MenuItem onClick={() => console.log("Clicked Pricing")}> How it works</MenuItem>
        <MenuItem onClick={() => console.log("Clicked Pricing")}> Careers</MenuItem>
    </>
};

