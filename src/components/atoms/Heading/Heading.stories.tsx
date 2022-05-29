import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Atom/Heading",
  component: Heading,
  args: {
    children: "Este es un titulo muy bonito!"
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

export const Sizes = () => (
  <>
    <Heading size="sm">Este es un titulo muy bonito!</Heading>
    <Heading size="md">Este es un titulo muy bonito!</Heading>
    <Heading size="lg">Este es un titulo muy bonito!</Heading>
  </>
);
