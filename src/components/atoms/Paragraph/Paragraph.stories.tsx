import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Paragraph from "./Paragraph";

export default {
  title: "Atom/Paragraph",
  component: Paragraph,
  argTypes: {
    isInline: {
      control: "boolean"
    },
    isCentered: {
      control: "boolean"
    }
  },
  args: {
    children:
      "Swords are no more use here. Esquire days mountain Fangorn champion brace waiting laboring preparing! Canopy plunder deceit cakehole strange Udùn piled fighters potent?",
    isInline: false,
    isCentered: false
  }
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
