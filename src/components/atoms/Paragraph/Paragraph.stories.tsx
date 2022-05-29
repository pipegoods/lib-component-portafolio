import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Paragraph from "./Paragraph";

export default {
  title: "Atom/Paragraph",
  component: Paragraph,
  args: {
    children:
      "Swords are no more use here. Esquire days mountain Fangorn champion brace waiting laboring preparing! Canopy plunder deceit cakehole strange Udùn piled fighters potent?"
  }
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
