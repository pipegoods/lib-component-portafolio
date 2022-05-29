import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Atom/Avatar",
  component: Avatar,
  args: {
    src: "https://picsum.photos/id/1027/200/200"
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const Sizes = () => (
  <div>
    <Avatar src="https://picsum.photos/id/1027/200/200" size="sm" />
    <Avatar src="https://picsum.photos/id/1027/200/200" size="md" />
    <Avatar src="https://picsum.photos/id/1027/200/200" size="lg" />
  </div>
);
