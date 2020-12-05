import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '@material-ui/core';
import { withTheme } from "../Theme"

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => withTheme(<Button {...args} />);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  variant: "contained",
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  variant: "contained",
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
};
