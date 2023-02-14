import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HamburgerMenuIcon } from "./HamburgerMenuIcon";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "HamburgerMenuIcon",
  component: HamburgerMenuIcon,
} as ComponentMeta<typeof HamburgerMenuIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HamburgerMenuIcon> = (args) => (
  <HamburgerMenuIcon />
);

export const Primary = Template.bind({});

Primary.args = {};
