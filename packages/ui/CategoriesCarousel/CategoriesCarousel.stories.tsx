import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CategoriesCarousel } from "./CategoriesCarousel";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CategoriesCarousel",
  component: CategoriesCarousel,
} as ComponentMeta<typeof CategoriesCarousel>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CategoriesCarousel> = (args) => (
  <CategoriesCarousel />
);

export const Primary = Template.bind({});

Primary.args = {};
