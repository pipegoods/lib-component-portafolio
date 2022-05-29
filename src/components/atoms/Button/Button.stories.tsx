import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"]
      }
    },
    isInline: {
      control: "boolean"
    }
  },
  args: {
    type: "primary",
    isInline: false
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  children: "Hello world!"
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: "Click me!"
};
