import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Picture from "./Picture";

export default {
  title: "Atom/Picture",
  component: Picture,
  args: {
    src: "https://picsum.photos/id/1033/400/400",
    width: 200
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" }
  }
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />;

export const Rounded = Template.bind({});
Rounded.args = { isRounded: true };

export const Border = Template.bind({});
Border.args = { withBorder: true };

export const Height = Template.bind({});
Height.args = { src: "https://picsum.photos/id/1033/400/800", height: 400 };

export const Width = Template.bind({});
Width.args = { src: "https://picsum.photos/id/1033/800/400", width: 400 };
