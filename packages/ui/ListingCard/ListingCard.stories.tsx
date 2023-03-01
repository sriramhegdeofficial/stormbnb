import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListingCard from "./ListingCard";
import ListingCardSkeleton from "./ListingCard.skeleton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ListingCard",
  component: ListingCard,
} as ComponentMeta<typeof ListingCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListingCard> = (args) => <ListingCard />;
const STemplate: ComponentStory<typeof ListingCardSkeleton> = (args) => (
  <ListingCardSkeleton />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Skeleton = STemplate.bind({});
Skeleton.args = {};
