import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainLayout } from "./MainLayout";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "MainLayout",
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout />;

export const Primary = Template.bind({});

Primary.args = {};
