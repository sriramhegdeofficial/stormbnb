import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CarouselIndicators from "./CarouselIndicators";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CarouselIndicators",
  component: CarouselIndicators,
} as ComponentMeta<typeof CarouselIndicators>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CarouselIndicators> = (args) => (
  <CarouselIndicators {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  count: 3,
};
