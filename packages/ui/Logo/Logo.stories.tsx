import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo variant={args.variant} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "lite",
};
