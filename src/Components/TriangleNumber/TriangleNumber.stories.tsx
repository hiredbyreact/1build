import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TriangleNumber from '.';
import ITriangleNumber from './ITriangleNumber';

import { withTheme } from '../../Theme';

export default {
    title: 'Misc/TriangleNumber',
    component: TriangleNumber,
} as Meta;

const Template: Story<ITriangleNumber> = (args) => withTheme(<TriangleNumber {...args} />);

export const LearnMore = Template.bind({});
LearnMore.args = {
    children: 1,
};
