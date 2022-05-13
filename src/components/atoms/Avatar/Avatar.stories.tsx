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

export const Sm = Template.bind({});
Sm.args = {
  size: "sm"
};

export const Md = Template.bind({});
Md.args = {
  size: "md"
};

export const Lg = Template.bind({});
Lg.args = {
  size: "lg"
};
