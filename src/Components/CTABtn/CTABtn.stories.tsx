import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


import { CTABtn, ICTABtn } from '.';
import { withTheme } from "../../Theme"


export default {
    title: 'Button/CTA',
    component: CTABtn,
} as Meta;

const Template: Story<ICTABtn> = (args) => withTheme(<CTABtn {...args} />)

export const LearnMore = Template.bind({});
LearnMore.args = {
    children: "Learn More",
};

