import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavArrowIcons } from "./NavArrowIcons";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "NavArrowIcons",
  component: NavArrowIcons,
} as ComponentMeta<typeof NavArrowIcons>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavArrowIcons> = (args) => (
  <NavArrowIcons direction={args.direction} />
);

export const Primary = Template.bind({});

Primary.args = {
  direction: "left",
};
