import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo("S1_CustomButton")} />;

ToStorybook.story = {
  name: "to Storybook",
};
