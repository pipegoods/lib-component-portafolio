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
