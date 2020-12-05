import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import imageFile from './svg.png';

export default {
    title: 'Assets/ParallaxImg',
    component: imageFile,
} as unknown as Meta;


const Template: Story = ({ src, alt }) => <img src={src} alt={alt} />

export const Main = Template.bind({});
Main.args = {
    src: imageFile,
    alt: 'my image',
};